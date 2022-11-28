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
import { Aggregation } from "./aggregation";
import { PickTimeSeriesFilter } from "./picktimeseriesfilter";
import { StatisticalTimeSeriesFilter } from "./statisticaltimeseriesfilter";
// TimeSeriesFilter
/**
 * A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.
**/
var TimeSeriesFilter = /** @class */ (function (_super) {
    __extends(TimeSeriesFilter, _super);
    function TimeSeriesFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregation" }),
        __metadata("design:type", Aggregation)
    ], TimeSeriesFilter.prototype, "aggregation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], TimeSeriesFilter.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pickTimeSeriesFilter" }),
        __metadata("design:type", PickTimeSeriesFilter)
    ], TimeSeriesFilter.prototype, "pickTimeSeriesFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryAggregation" }),
        __metadata("design:type", Aggregation)
    ], TimeSeriesFilter.prototype, "secondaryAggregation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statisticalTimeSeriesFilter" }),
        __metadata("design:type", StatisticalTimeSeriesFilter)
    ], TimeSeriesFilter.prototype, "statisticalTimeSeriesFilter", void 0);
    return TimeSeriesFilter;
}(SpeakeasyBase));
export { TimeSeriesFilter };
