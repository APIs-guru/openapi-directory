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
export var BasicPerfSampleSeriesPerfMetricTypeEnum;
(function (BasicPerfSampleSeriesPerfMetricTypeEnum) {
    BasicPerfSampleSeriesPerfMetricTypeEnum["PerfMetricTypeUnspecified"] = "perfMetricTypeUnspecified";
    BasicPerfSampleSeriesPerfMetricTypeEnum["Memory"] = "memory";
    BasicPerfSampleSeriesPerfMetricTypeEnum["Cpu"] = "cpu";
    BasicPerfSampleSeriesPerfMetricTypeEnum["Network"] = "network";
    BasicPerfSampleSeriesPerfMetricTypeEnum["Graphics"] = "graphics";
})(BasicPerfSampleSeriesPerfMetricTypeEnum || (BasicPerfSampleSeriesPerfMetricTypeEnum = {}));
export var BasicPerfSampleSeriesPerfUnitEnum;
(function (BasicPerfSampleSeriesPerfUnitEnum) {
    BasicPerfSampleSeriesPerfUnitEnum["PerfUnitUnspecified"] = "perfUnitUnspecified";
    BasicPerfSampleSeriesPerfUnitEnum["Kibibyte"] = "kibibyte";
    BasicPerfSampleSeriesPerfUnitEnum["Percent"] = "percent";
    BasicPerfSampleSeriesPerfUnitEnum["BytesPerSecond"] = "bytesPerSecond";
    BasicPerfSampleSeriesPerfUnitEnum["FramesPerSecond"] = "framesPerSecond";
    BasicPerfSampleSeriesPerfUnitEnum["Byte"] = "byte";
})(BasicPerfSampleSeriesPerfUnitEnum || (BasicPerfSampleSeriesPerfUnitEnum = {}));
export var BasicPerfSampleSeriesSampleSeriesLabelEnum;
(function (BasicPerfSampleSeriesSampleSeriesLabelEnum) {
    BasicPerfSampleSeriesSampleSeriesLabelEnum["SampleSeriesTypeUnspecified"] = "sampleSeriesTypeUnspecified";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["MemoryRssPrivate"] = "memoryRssPrivate";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["MemoryRssShared"] = "memoryRssShared";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["MemoryRssTotal"] = "memoryRssTotal";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["MemoryTotal"] = "memoryTotal";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["CpuUser"] = "cpuUser";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["CpuKernel"] = "cpuKernel";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["CpuTotal"] = "cpuTotal";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["NtBytesTransferred"] = "ntBytesTransferred";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["NtBytesReceived"] = "ntBytesReceived";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["NetworkSent"] = "networkSent";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["NetworkReceived"] = "networkReceived";
    BasicPerfSampleSeriesSampleSeriesLabelEnum["GraphicsFrameRate"] = "graphicsFrameRate";
})(BasicPerfSampleSeriesSampleSeriesLabelEnum || (BasicPerfSampleSeriesSampleSeriesLabelEnum = {}));
// BasicPerfSampleSeries
/**
 * Encapsulates the metadata for basic sample series represented by a line chart
**/
var BasicPerfSampleSeries = /** @class */ (function (_super) {
    __extends(BasicPerfSampleSeries, _super);
    function BasicPerfSampleSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perfMetricType" }),
        __metadata("design:type", String)
    ], BasicPerfSampleSeries.prototype, "perfMetricType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perfUnit" }),
        __metadata("design:type", String)
    ], BasicPerfSampleSeries.prototype, "perfUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sampleSeriesLabel" }),
        __metadata("design:type", String)
    ], BasicPerfSampleSeries.prototype, "sampleSeriesLabel", void 0);
    return BasicPerfSampleSeries;
}(SpeakeasyBase));
export { BasicPerfSampleSeries };
