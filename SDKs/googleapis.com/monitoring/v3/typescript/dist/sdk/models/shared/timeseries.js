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
import { MonitoredResourceMetadata } from "./monitoredresourcemetadata";
import { Metric } from "./metric";
import { Point } from "./point";
import { MonitoredResource } from "./monitoredresource";
export var TimeSeriesMetricKindEnum;
(function (TimeSeriesMetricKindEnum) {
    TimeSeriesMetricKindEnum["MetricKindUnspecified"] = "METRIC_KIND_UNSPECIFIED";
    TimeSeriesMetricKindEnum["Gauge"] = "GAUGE";
    TimeSeriesMetricKindEnum["Delta"] = "DELTA";
    TimeSeriesMetricKindEnum["Cumulative"] = "CUMULATIVE";
})(TimeSeriesMetricKindEnum || (TimeSeriesMetricKindEnum = {}));
export var TimeSeriesValueTypeEnum;
(function (TimeSeriesValueTypeEnum) {
    TimeSeriesValueTypeEnum["ValueTypeUnspecified"] = "VALUE_TYPE_UNSPECIFIED";
    TimeSeriesValueTypeEnum["Bool"] = "BOOL";
    TimeSeriesValueTypeEnum["Int64"] = "INT64";
    TimeSeriesValueTypeEnum["Double"] = "DOUBLE";
    TimeSeriesValueTypeEnum["String"] = "STRING";
    TimeSeriesValueTypeEnum["Distribution"] = "DISTRIBUTION";
    TimeSeriesValueTypeEnum["Money"] = "MONEY";
})(TimeSeriesValueTypeEnum || (TimeSeriesValueTypeEnum = {}));
// TimeSeries
/**
 * A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
**/
var TimeSeries = /** @class */ (function (_super) {
    __extends(TimeSeries, _super);
    function TimeSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", MonitoredResourceMetadata)
    ], TimeSeries.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metric" }),
        __metadata("design:type", Metric)
    ], TimeSeries.prototype, "metric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricKind" }),
        __metadata("design:type", String)
    ], TimeSeries.prototype, "metricKind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=points", elemType: Point }),
        __metadata("design:type", Array)
    ], TimeSeries.prototype, "points", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", MonitoredResource)
    ], TimeSeries.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], TimeSeries.prototype, "unit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valueType" }),
        __metadata("design:type", String)
    ], TimeSeries.prototype, "valueType", void 0);
    return TimeSeries;
}(SpeakeasyBase));
export { TimeSeries };
