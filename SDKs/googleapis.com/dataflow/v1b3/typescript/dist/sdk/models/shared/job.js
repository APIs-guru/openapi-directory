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
import { EnvironmentInput } from "./environment";
import { JobExecutionInfo } from "./jobexecutioninfo";
import { JobMetadata } from "./jobmetadata";
import { PipelineDescription } from "./pipelinedescription";
import { ExecutionStageState } from "./executionstagestate";
import { Step } from "./step";
import { Environment } from "./environment";
export var JobCurrentStateEnum;
(function (JobCurrentStateEnum) {
    JobCurrentStateEnum["JobStateUnknown"] = "JOB_STATE_UNKNOWN";
    JobCurrentStateEnum["JobStateStopped"] = "JOB_STATE_STOPPED";
    JobCurrentStateEnum["JobStateRunning"] = "JOB_STATE_RUNNING";
    JobCurrentStateEnum["JobStateDone"] = "JOB_STATE_DONE";
    JobCurrentStateEnum["JobStateFailed"] = "JOB_STATE_FAILED";
    JobCurrentStateEnum["JobStateCancelled"] = "JOB_STATE_CANCELLED";
    JobCurrentStateEnum["JobStateUpdated"] = "JOB_STATE_UPDATED";
    JobCurrentStateEnum["JobStateDraining"] = "JOB_STATE_DRAINING";
    JobCurrentStateEnum["JobStateDrained"] = "JOB_STATE_DRAINED";
    JobCurrentStateEnum["JobStatePending"] = "JOB_STATE_PENDING";
    JobCurrentStateEnum["JobStateCancelling"] = "JOB_STATE_CANCELLING";
    JobCurrentStateEnum["JobStateQueued"] = "JOB_STATE_QUEUED";
    JobCurrentStateEnum["JobStateResourceCleaningUp"] = "JOB_STATE_RESOURCE_CLEANING_UP";
})(JobCurrentStateEnum || (JobCurrentStateEnum = {}));
export var JobRequestedStateEnum;
(function (JobRequestedStateEnum) {
    JobRequestedStateEnum["JobStateUnknown"] = "JOB_STATE_UNKNOWN";
    JobRequestedStateEnum["JobStateStopped"] = "JOB_STATE_STOPPED";
    JobRequestedStateEnum["JobStateRunning"] = "JOB_STATE_RUNNING";
    JobRequestedStateEnum["JobStateDone"] = "JOB_STATE_DONE";
    JobRequestedStateEnum["JobStateFailed"] = "JOB_STATE_FAILED";
    JobRequestedStateEnum["JobStateCancelled"] = "JOB_STATE_CANCELLED";
    JobRequestedStateEnum["JobStateUpdated"] = "JOB_STATE_UPDATED";
    JobRequestedStateEnum["JobStateDraining"] = "JOB_STATE_DRAINING";
    JobRequestedStateEnum["JobStateDrained"] = "JOB_STATE_DRAINED";
    JobRequestedStateEnum["JobStatePending"] = "JOB_STATE_PENDING";
    JobRequestedStateEnum["JobStateCancelling"] = "JOB_STATE_CANCELLING";
    JobRequestedStateEnum["JobStateQueued"] = "JOB_STATE_QUEUED";
    JobRequestedStateEnum["JobStateResourceCleaningUp"] = "JOB_STATE_RESOURCE_CLEANING_UP";
})(JobRequestedStateEnum || (JobRequestedStateEnum = {}));
export var JobTypeEnum;
(function (JobTypeEnum) {
    JobTypeEnum["JobTypeUnknown"] = "JOB_TYPE_UNKNOWN";
    JobTypeEnum["JobTypeBatch"] = "JOB_TYPE_BATCH";
    JobTypeEnum["JobTypeStreaming"] = "JOB_TYPE_STREAMING";
})(JobTypeEnum || (JobTypeEnum = {}));
// JobInput
/**
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
**/
var JobInput = /** @class */ (function (_super) {
    __extends(JobInput, _super);
    function JobInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestId" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdFromSnapshotId" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "createdFromSnapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentState" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "currentState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentStateTime" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "currentStateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", EnvironmentInput)
    ], JobInput.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionInfo" }),
        __metadata("design:type", JobExecutionInfo)
    ], JobInput.prototype, "executionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobMetadata" }),
        __metadata("design:type", JobMetadata)
    ], JobInput.prototype, "jobMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], JobInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipelineDescription" }),
        __metadata("design:type", PipelineDescription)
    ], JobInput.prototype, "pipelineDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceJobId" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "replaceJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replacedByJobId" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "replacedByJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedState" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "requestedState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=satisfiesPzs" }),
        __metadata("design:type", Boolean)
    ], JobInput.prototype, "satisfiesPzs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stageStates", elemType: ExecutionStageState }),
        __metadata("design:type", Array)
    ], JobInput.prototype, "stageStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steps", elemType: Step }),
        __metadata("design:type", Array)
    ], JobInput.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepsLocation" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "stepsLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempFiles" }),
        __metadata("design:type", Array)
    ], JobInput.prototype, "tempFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformNameMapping" }),
        __metadata("design:type", Map)
    ], JobInput.prototype, "transformNameMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], JobInput.prototype, "type", void 0);
    return JobInput;
}(SpeakeasyBase));
export { JobInput };
// Job
/**
 * Defines a job to be run by the Cloud Dataflow service. Do not enter confidential information when you supply string values using the API.
**/
var Job = /** @class */ (function (_super) {
    __extends(Job, _super);
    function Job() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientRequestId" }),
        __metadata("design:type", String)
    ], Job.prototype, "clientRequestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdFromSnapshotId" }),
        __metadata("design:type", String)
    ], Job.prototype, "createdFromSnapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentState" }),
        __metadata("design:type", String)
    ], Job.prototype, "currentState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currentStateTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "currentStateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", Environment)
    ], Job.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionInfo" }),
        __metadata("design:type", JobExecutionInfo)
    ], Job.prototype, "executionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Job.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jobMetadata" }),
        __metadata("design:type", JobMetadata)
    ], Job.prototype, "jobMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Job.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], Job.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Job.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pipelineDescription" }),
        __metadata("design:type", PipelineDescription)
    ], Job.prototype, "pipelineDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Job.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replaceJobId" }),
        __metadata("design:type", String)
    ], Job.prototype, "replaceJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replacedByJobId" }),
        __metadata("design:type", String)
    ], Job.prototype, "replacedByJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestedState" }),
        __metadata("design:type", String)
    ], Job.prototype, "requestedState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=satisfiesPzs" }),
        __metadata("design:type", Boolean)
    ], Job.prototype, "satisfiesPzs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stageStates", elemType: ExecutionStageState }),
        __metadata("design:type", Array)
    ], Job.prototype, "stageStates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Job.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=steps", elemType: Step }),
        __metadata("design:type", Array)
    ], Job.prototype, "steps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepsLocation" }),
        __metadata("design:type", String)
    ], Job.prototype, "stepsLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tempFiles" }),
        __metadata("design:type", Array)
    ], Job.prototype, "tempFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformNameMapping" }),
        __metadata("design:type", Map)
    ], Job.prototype, "transformNameMapping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Job.prototype, "type", void 0);
    return Job;
}(SpeakeasyBase));
export { Job };
