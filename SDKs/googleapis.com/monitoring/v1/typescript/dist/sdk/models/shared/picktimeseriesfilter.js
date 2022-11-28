var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var PickTimeSeriesFilterDirectionEnum;
(function (PickTimeSeriesFilterDirectionEnum) {
    PickTimeSeriesFilterDirectionEnum["DirectionUnspecified"] = "DIRECTION_UNSPECIFIED";
    PickTimeSeriesFilterDirectionEnum["Top"] = "TOP";
    PickTimeSeriesFilterDirectionEnum["Bottom"] = "BOTTOM";
})(PickTimeSeriesFilterDirectionEnum || (PickTimeSeriesFilterDirectionEnum = {}));
export var PickTimeSeriesFilterRankingMethodEnum;
(function (PickTimeSeriesFilterRankingMethodEnum) {
    PickTimeSeriesFilterRankingMethodEnum["MethodUnspecified"] = "METHOD_UNSPECIFIED";
    PickTimeSeriesFilterRankingMethodEnum["MethodMean"] = "METHOD_MEAN";
    PickTimeSeriesFilterRankingMethodEnum["MethodMax"] = "METHOD_MAX";
    PickTimeSeriesFilterRankingMethodEnum["MethodMin"] = "METHOD_MIN";
    PickTimeSeriesFilterRankingMethodEnum["MethodSum"] = "METHOD_SUM";
    PickTimeSeriesFilterRankingMethodEnum["MethodLatest"] = "METHOD_LATEST";
})(PickTimeSeriesFilterRankingMethodEnum || (PickTimeSeriesFilterRankingMethodEnum = {}));
// PickTimeSeriesFilter
/**
 * Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter.
**/
var PickTimeSeriesFilter = /** @class */ (function (_super) {
    __extends(PickTimeSeriesFilter, _super);
    function PickTimeSeriesFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], PickTimeSeriesFilter.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=numTimeSeries" }),
        __metadata("design:type", Number)
    ], PickTimeSeriesFilter.prototype, "numTimeSeries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rankingMethod" }),
        __metadata("design:type", String)
    ], PickTimeSeriesFilter.prototype, "rankingMethod", void 0);
    return PickTimeSeriesFilter;
}(SpeakeasyBase));
export { PickTimeSeriesFilter };
