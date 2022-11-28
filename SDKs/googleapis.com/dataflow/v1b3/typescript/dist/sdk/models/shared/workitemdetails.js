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
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerInfo } from "./stragglerinfo";
export var WorkItemDetailsStateEnum;
(function (WorkItemDetailsStateEnum) {
    WorkItemDetailsStateEnum["ExecutionStateUnknown"] = "EXECUTION_STATE_UNKNOWN";
    WorkItemDetailsStateEnum["ExecutionStateNotStarted"] = "EXECUTION_STATE_NOT_STARTED";
    WorkItemDetailsStateEnum["ExecutionStateRunning"] = "EXECUTION_STATE_RUNNING";
    WorkItemDetailsStateEnum["ExecutionStateSucceeded"] = "EXECUTION_STATE_SUCCEEDED";
    WorkItemDetailsStateEnum["ExecutionStateFailed"] = "EXECUTION_STATE_FAILED";
    WorkItemDetailsStateEnum["ExecutionStateCancelled"] = "EXECUTION_STATE_CANCELLED";
})(WorkItemDetailsStateEnum || (WorkItemDetailsStateEnum = {}));
// WorkItemDetails
/**
 * Information about an individual work item execution.
**/
var WorkItemDetails = /** @class */ (function (_super) {
    __extends(WorkItemDetails, _super);
    function WorkItemDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attemptId" }),
        __metadata("design:type", String)
    ], WorkItemDetails.prototype, "attemptId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], WorkItemDetails.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: MetricUpdate }),
        __metadata("design:type", Array)
    ], WorkItemDetails.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", ProgressTimeseries)
    ], WorkItemDetails.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], WorkItemDetails.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], WorkItemDetails.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stragglerInfo" }),
        __metadata("design:type", StragglerInfo)
    ], WorkItemDetails.prototype, "stragglerInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskId" }),
        __metadata("design:type", String)
    ], WorkItemDetails.prototype, "taskId", void 0);
    return WorkItemDetails;
}(SpeakeasyBase));
export { WorkItemDetails };
