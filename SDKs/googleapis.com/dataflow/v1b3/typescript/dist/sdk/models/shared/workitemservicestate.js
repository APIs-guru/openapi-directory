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
import { Status } from "./status";
import { HotKeyDetection } from "./hotkeydetection";
import { MetricShortId } from "./metricshortid";
import { ApproximateSplitRequest } from "./approximatesplitrequest";
import { ApproximateProgress } from "./approximateprogress";
import { Position } from "./position";
// WorkItemServiceState
/**
 * The Dataflow service's idea of the current state of a WorkItem being processed by a worker.
**/
var WorkItemServiceState = /** @class */ (function (_super) {
    __extends(WorkItemServiceState, _super);
    function WorkItemServiceState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completeWorkStatus" }),
        __metadata("design:type", Status)
    ], WorkItemServiceState.prototype, "completeWorkStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=harnessData" }),
        __metadata("design:type", Map)
    ], WorkItemServiceState.prototype, "harnessData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hotKeyDetection" }),
        __metadata("design:type", HotKeyDetection)
    ], WorkItemServiceState.prototype, "hotKeyDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=leaseExpireTime" }),
        __metadata("design:type", String)
    ], WorkItemServiceState.prototype, "leaseExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricShortId", elemType: MetricShortId }),
        __metadata("design:type", Array)
    ], WorkItemServiceState.prototype, "metricShortId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextReportIndex" }),
        __metadata("design:type", String)
    ], WorkItemServiceState.prototype, "nextReportIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportStatusInterval" }),
        __metadata("design:type", String)
    ], WorkItemServiceState.prototype, "reportStatusInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splitRequest" }),
        __metadata("design:type", ApproximateSplitRequest)
    ], WorkItemServiceState.prototype, "splitRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedStopPoint" }),
        __metadata("design:type", ApproximateProgress)
    ], WorkItemServiceState.prototype, "suggestedStopPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suggestedStopPosition" }),
        __metadata("design:type", Position)
    ], WorkItemServiceState.prototype, "suggestedStopPosition", void 0);
    return WorkItemServiceState;
}(SpeakeasyBase));
export { WorkItemServiceState };
