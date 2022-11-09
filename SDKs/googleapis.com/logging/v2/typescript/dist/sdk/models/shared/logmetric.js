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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BucketOptions } from "./bucketoptions";
import { MetricDescriptor } from "./metricdescriptor";
export var LogMetricVersionEnum;
(function (LogMetricVersionEnum) {
    LogMetricVersionEnum["V2"] = "V2";
    LogMetricVersionEnum["V1"] = "V1";
})(LogMetricVersionEnum || (LogMetricVersionEnum = {}));
// LogMetric
/**
 * Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
**/
var LogMetric = /** @class */ (function (_super) {
    __extends(LogMetric, _super);
    function LogMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bucketName" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "bucketName", void 0);
    __decorate([
        Metadata({ data: "json, name=bucketOptions" }),
        __metadata("design:type", BucketOptions)
    ], LogMetric.prototype, "bucketOptions", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], LogMetric.prototype, "disabled", void 0);
    __decorate([
        Metadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "json, name=labelExtractors" }),
        __metadata("design:type", Map)
    ], LogMetric.prototype, "labelExtractors", void 0);
    __decorate([
        Metadata({ data: "json, name=metricDescriptor" }),
        __metadata("design:type", MetricDescriptor)
    ], LogMetric.prototype, "metricDescriptor", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=valueExtractor" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "valueExtractor", void 0);
    __decorate([
        Metadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], LogMetric.prototype, "version", void 0);
    return LogMetric;
}(SpeakeasyBase));
export { LogMetric };
