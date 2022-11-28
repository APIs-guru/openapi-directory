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
import { AppStartTime } from "./appstarttime";
import { GraphicsStats } from "./graphicsstats";
import { PerfEnvironment } from "./perfenvironment";
export var PerfMetricsSummaryPerfMetricsEnum;
(function (PerfMetricsSummaryPerfMetricsEnum) {
    PerfMetricsSummaryPerfMetricsEnum["PerfMetricTypeUnspecified"] = "perfMetricTypeUnspecified";
    PerfMetricsSummaryPerfMetricsEnum["Memory"] = "memory";
    PerfMetricsSummaryPerfMetricsEnum["Cpu"] = "cpu";
    PerfMetricsSummaryPerfMetricsEnum["Network"] = "network";
    PerfMetricsSummaryPerfMetricsEnum["Graphics"] = "graphics";
})(PerfMetricsSummaryPerfMetricsEnum || (PerfMetricsSummaryPerfMetricsEnum = {}));
// PerfMetricsSummary
/**
 * A summary of perf metrics collected and performance environment info
**/
var PerfMetricsSummary = /** @class */ (function (_super) {
    __extends(PerfMetricsSummary, _super);
    function PerfMetricsSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appStartTime" }),
        __metadata("design:type", AppStartTime)
    ], PerfMetricsSummary.prototype, "appStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionId" }),
        __metadata("design:type", String)
    ], PerfMetricsSummary.prototype, "executionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=graphicsStats" }),
        __metadata("design:type", GraphicsStats)
    ], PerfMetricsSummary.prototype, "graphicsStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=historyId" }),
        __metadata("design:type", String)
    ], PerfMetricsSummary.prototype, "historyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perfEnvironment" }),
        __metadata("design:type", PerfEnvironment)
    ], PerfMetricsSummary.prototype, "perfEnvironment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perfMetrics" }),
        __metadata("design:type", Array)
    ], PerfMetricsSummary.prototype, "perfMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], PerfMetricsSummary.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepId" }),
        __metadata("design:type", String)
    ], PerfMetricsSummary.prototype, "stepId", void 0);
    return PerfMetricsSummary;
}(SpeakeasyBase));
export { PerfMetricsSummary };
