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
export var ExecutionStageStateExecutionStageStateEnum;
(function (ExecutionStageStateExecutionStageStateEnum) {
    ExecutionStageStateExecutionStageStateEnum["JobStateUnknown"] = "JOB_STATE_UNKNOWN";
    ExecutionStageStateExecutionStageStateEnum["JobStateStopped"] = "JOB_STATE_STOPPED";
    ExecutionStageStateExecutionStageStateEnum["JobStateRunning"] = "JOB_STATE_RUNNING";
    ExecutionStageStateExecutionStageStateEnum["JobStateDone"] = "JOB_STATE_DONE";
    ExecutionStageStateExecutionStageStateEnum["JobStateFailed"] = "JOB_STATE_FAILED";
    ExecutionStageStateExecutionStageStateEnum["JobStateCancelled"] = "JOB_STATE_CANCELLED";
    ExecutionStageStateExecutionStageStateEnum["JobStateUpdated"] = "JOB_STATE_UPDATED";
    ExecutionStageStateExecutionStageStateEnum["JobStateDraining"] = "JOB_STATE_DRAINING";
    ExecutionStageStateExecutionStageStateEnum["JobStateDrained"] = "JOB_STATE_DRAINED";
    ExecutionStageStateExecutionStageStateEnum["JobStatePending"] = "JOB_STATE_PENDING";
    ExecutionStageStateExecutionStageStateEnum["JobStateCancelling"] = "JOB_STATE_CANCELLING";
    ExecutionStageStateExecutionStageStateEnum["JobStateQueued"] = "JOB_STATE_QUEUED";
    ExecutionStageStateExecutionStageStateEnum["JobStateResourceCleaningUp"] = "JOB_STATE_RESOURCE_CLEANING_UP";
})(ExecutionStageStateExecutionStageStateEnum || (ExecutionStageStateExecutionStageStateEnum = {}));
// ExecutionStageState
/**
 * A message describing the state of a particular execution stage.
**/
var ExecutionStageState = /** @class */ (function (_super) {
    __extends(ExecutionStageState, _super);
    function ExecutionStageState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentStateTime" }),
        __metadata("design:type", String)
    ], ExecutionStageState.prototype, "currentStateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStageName" }),
        __metadata("design:type", String)
    ], ExecutionStageState.prototype, "executionStageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionStageState" }),
        __metadata("design:type", String)
    ], ExecutionStageState.prototype, "executionStageState", void 0);
    return ExecutionStageState;
}(SpeakeasyBase));
export { ExecutionStageState };
