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
import { Metadata } from "./metadata";
import { Phase } from "./phase";
export var RolloutApprovalStateEnum;
(function (RolloutApprovalStateEnum) {
    RolloutApprovalStateEnum["ApprovalStateUnspecified"] = "APPROVAL_STATE_UNSPECIFIED";
    RolloutApprovalStateEnum["NeedsApproval"] = "NEEDS_APPROVAL";
    RolloutApprovalStateEnum["DoesNotNeedApproval"] = "DOES_NOT_NEED_APPROVAL";
    RolloutApprovalStateEnum["Approved"] = "APPROVED";
    RolloutApprovalStateEnum["Rejected"] = "REJECTED";
})(RolloutApprovalStateEnum || (RolloutApprovalStateEnum = {}));
export var RolloutDeployFailureCauseEnum;
(function (RolloutDeployFailureCauseEnum) {
    RolloutDeployFailureCauseEnum["FailureCauseUnspecified"] = "FAILURE_CAUSE_UNSPECIFIED";
    RolloutDeployFailureCauseEnum["CloudBuildUnavailable"] = "CLOUD_BUILD_UNAVAILABLE";
    RolloutDeployFailureCauseEnum["ExecutionFailed"] = "EXECUTION_FAILED";
    RolloutDeployFailureCauseEnum["DeadlineExceeded"] = "DEADLINE_EXCEEDED";
    RolloutDeployFailureCauseEnum["ReleaseFailed"] = "RELEASE_FAILED";
    RolloutDeployFailureCauseEnum["ReleaseAbandoned"] = "RELEASE_ABANDONED";
    RolloutDeployFailureCauseEnum["VerificationConfigNotFound"] = "VERIFICATION_CONFIG_NOT_FOUND";
})(RolloutDeployFailureCauseEnum || (RolloutDeployFailureCauseEnum = {}));
export var RolloutStateEnum;
(function (RolloutStateEnum) {
    RolloutStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    RolloutStateEnum["Succeeded"] = "SUCCEEDED";
    RolloutStateEnum["Failed"] = "FAILED";
    RolloutStateEnum["InProgress"] = "IN_PROGRESS";
    RolloutStateEnum["PendingApproval"] = "PENDING_APPROVAL";
    RolloutStateEnum["ApprovalRejected"] = "APPROVAL_REJECTED";
    RolloutStateEnum["Pending"] = "PENDING";
    RolloutStateEnum["PendingRelease"] = "PENDING_RELEASE";
})(RolloutStateEnum || (RolloutStateEnum = {}));
// Rollout
/**
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
var Rollout = /** @class */ (function (_super) {
    __extends(Rollout, _super);
    function Rollout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], Rollout.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalState" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "approvalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approveTime" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "approveTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployEndTime" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "deployEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployFailureCause" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "deployFailureCause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployStartTime" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "deployStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deployingBuild" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "deployingBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enqueueTime" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "enqueueTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureReason" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Rollout.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Metadata)
    ], Rollout.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phases", elemType: Phase }),
        __metadata("design:type", Array)
    ], Rollout.prototype, "phases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Rollout.prototype, "uid", void 0);
    return Rollout;
}(SpeakeasyBase));
export { Rollout };
// RolloutInput
/**
 * A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.
**/
var RolloutInput = /** @class */ (function (_super) {
    __extends(RolloutInput, _super);
    function RolloutInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", Map)
    ], RolloutInput.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], RolloutInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], RolloutInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], RolloutInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Metadata)
    ], RolloutInput.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RolloutInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", String)
    ], RolloutInput.prototype, "targetId", void 0);
    return RolloutInput;
}(SpeakeasyBase));
export { RolloutInput };
