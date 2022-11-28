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
import { TimeDimension } from "./timedimension";
export var DimensionalMetricValueMetricOptionEnum;
(function (DimensionalMetricValueMetricOptionEnum) {
    DimensionalMetricValueMetricOptionEnum["MetricOptionUnspecified"] = "METRIC_OPTION_UNSPECIFIED";
    DimensionalMetricValueMetricOptionEnum["AggregatedTotal"] = "AGGREGATED_TOTAL";
    DimensionalMetricValueMetricOptionEnum["AggregatedDaily"] = "AGGREGATED_DAILY";
    DimensionalMetricValueMetricOptionEnum["BreakdownDayOfWeek"] = "BREAKDOWN_DAY_OF_WEEK";
    DimensionalMetricValueMetricOptionEnum["BreakdownHourOfDay"] = "BREAKDOWN_HOUR_OF_DAY";
})(DimensionalMetricValueMetricOptionEnum || (DimensionalMetricValueMetricOptionEnum = {}));
// DimensionalMetricValue
/**
 * A value for a single metric with a given time dimension.
**/
var DimensionalMetricValue = /** @class */ (function (_super) {
    __extends(DimensionalMetricValue, _super);
    function DimensionalMetricValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricOption" }),
        __metadata("design:type", String)
    ], DimensionalMetricValue.prototype, "metricOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeDimension" }),
        __metadata("design:type", TimeDimension)
    ], DimensionalMetricValue.prototype, "timeDimension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], DimensionalMetricValue.prototype, "value", void 0);
    return DimensionalMetricValue;
}(SpeakeasyBase));
export { DimensionalMetricValue };
