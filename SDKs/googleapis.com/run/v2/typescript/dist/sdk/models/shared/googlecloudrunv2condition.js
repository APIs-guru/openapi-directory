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
export var GoogleCloudRunV2ConditionExecutionReasonEnum;
(function (GoogleCloudRunV2ConditionExecutionReasonEnum) {
    GoogleCloudRunV2ConditionExecutionReasonEnum["ExecutionReasonUndefined"] = "EXECUTION_REASON_UNDEFINED";
    GoogleCloudRunV2ConditionExecutionReasonEnum["JobStatusServicePollingError"] = "JOB_STATUS_SERVICE_POLLING_ERROR";
    GoogleCloudRunV2ConditionExecutionReasonEnum["NonZeroExitCode"] = "NON_ZERO_EXIT_CODE";
    GoogleCloudRunV2ConditionExecutionReasonEnum["Cancelled"] = "CANCELLED";
})(GoogleCloudRunV2ConditionExecutionReasonEnum || (GoogleCloudRunV2ConditionExecutionReasonEnum = {}));
export var GoogleCloudRunV2ConditionReasonEnum;
(function (GoogleCloudRunV2ConditionReasonEnum) {
    GoogleCloudRunV2ConditionReasonEnum["CommonReasonUndefined"] = "COMMON_REASON_UNDEFINED";
    GoogleCloudRunV2ConditionReasonEnum["Unknown"] = "UNKNOWN";
    GoogleCloudRunV2ConditionReasonEnum["RevisionFailed"] = "REVISION_FAILED";
    GoogleCloudRunV2ConditionReasonEnum["ProgressDeadlineExceeded"] = "PROGRESS_DEADLINE_EXCEEDED";
    GoogleCloudRunV2ConditionReasonEnum["ContainerMissing"] = "CONTAINER_MISSING";
    GoogleCloudRunV2ConditionReasonEnum["ContainerPermissionDenied"] = "CONTAINER_PERMISSION_DENIED";
    GoogleCloudRunV2ConditionReasonEnum["ContainerImageUnauthorized"] = "CONTAINER_IMAGE_UNAUTHORIZED";
    GoogleCloudRunV2ConditionReasonEnum["ContainerImageAuthorizationCheckFailed"] = "CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED";
    GoogleCloudRunV2ConditionReasonEnum["EncryptionKeyPermissionDenied"] = "ENCRYPTION_KEY_PERMISSION_DENIED";
    GoogleCloudRunV2ConditionReasonEnum["EncryptionKeyCheckFailed"] = "ENCRYPTION_KEY_CHECK_FAILED";
    GoogleCloudRunV2ConditionReasonEnum["SecretsAccessCheckFailed"] = "SECRETS_ACCESS_CHECK_FAILED";
    GoogleCloudRunV2ConditionReasonEnum["WaitingForOperation"] = "WAITING_FOR_OPERATION";
    GoogleCloudRunV2ConditionReasonEnum["ImmediateRetry"] = "IMMEDIATE_RETRY";
    GoogleCloudRunV2ConditionReasonEnum["PostponedRetry"] = "POSTPONED_RETRY";
    GoogleCloudRunV2ConditionReasonEnum["Internal"] = "INTERNAL";
})(GoogleCloudRunV2ConditionReasonEnum || (GoogleCloudRunV2ConditionReasonEnum = {}));
export var GoogleCloudRunV2ConditionRevisionReasonEnum;
(function (GoogleCloudRunV2ConditionRevisionReasonEnum) {
    GoogleCloudRunV2ConditionRevisionReasonEnum["RevisionReasonUndefined"] = "REVISION_REASON_UNDEFINED";
    GoogleCloudRunV2ConditionRevisionReasonEnum["Pending"] = "PENDING";
    GoogleCloudRunV2ConditionRevisionReasonEnum["Reserve"] = "RESERVE";
    GoogleCloudRunV2ConditionRevisionReasonEnum["Retired"] = "RETIRED";
    GoogleCloudRunV2ConditionRevisionReasonEnum["Retiring"] = "RETIRING";
    GoogleCloudRunV2ConditionRevisionReasonEnum["Recreating"] = "RECREATING";
    GoogleCloudRunV2ConditionRevisionReasonEnum["HealthCheckContainerError"] = "HEALTH_CHECK_CONTAINER_ERROR";
    GoogleCloudRunV2ConditionRevisionReasonEnum["CustomizedPathResponsePending"] = "CUSTOMIZED_PATH_RESPONSE_PENDING";
    GoogleCloudRunV2ConditionRevisionReasonEnum["MinInstancesNotProvisioned"] = "MIN_INSTANCES_NOT_PROVISIONED";
    GoogleCloudRunV2ConditionRevisionReasonEnum["ActiveRevisionLimitReached"] = "ACTIVE_REVISION_LIMIT_REACHED";
    GoogleCloudRunV2ConditionRevisionReasonEnum["NoDeployment"] = "NO_DEPLOYMENT";
    GoogleCloudRunV2ConditionRevisionReasonEnum["HealthCheckSkipped"] = "HEALTH_CHECK_SKIPPED";
})(GoogleCloudRunV2ConditionRevisionReasonEnum || (GoogleCloudRunV2ConditionRevisionReasonEnum = {}));
export var GoogleCloudRunV2ConditionSeverityEnum;
(function (GoogleCloudRunV2ConditionSeverityEnum) {
    GoogleCloudRunV2ConditionSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    GoogleCloudRunV2ConditionSeverityEnum["Error"] = "ERROR";
    GoogleCloudRunV2ConditionSeverityEnum["Warning"] = "WARNING";
    GoogleCloudRunV2ConditionSeverityEnum["Info"] = "INFO";
})(GoogleCloudRunV2ConditionSeverityEnum || (GoogleCloudRunV2ConditionSeverityEnum = {}));
export var GoogleCloudRunV2ConditionStateEnum;
(function (GoogleCloudRunV2ConditionStateEnum) {
    GoogleCloudRunV2ConditionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudRunV2ConditionStateEnum["ConditionPending"] = "CONDITION_PENDING";
    GoogleCloudRunV2ConditionStateEnum["ConditionReconciling"] = "CONDITION_RECONCILING";
    GoogleCloudRunV2ConditionStateEnum["ConditionFailed"] = "CONDITION_FAILED";
    GoogleCloudRunV2ConditionStateEnum["ConditionSucceeded"] = "CONDITION_SUCCEEDED";
})(GoogleCloudRunV2ConditionStateEnum || (GoogleCloudRunV2ConditionStateEnum = {}));
// GoogleCloudRunV2Condition
/**
 * Defines a status condition for a resource.
**/
var GoogleCloudRunV2Condition = /** @class */ (function (_super) {
    __extends(GoogleCloudRunV2Condition, _super);
    function GoogleCloudRunV2Condition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionReason" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "executionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastTransitionTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "lastTransitionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revisionReason" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "revisionReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudRunV2Condition.prototype, "type", void 0);
    return GoogleCloudRunV2Condition;
}(SpeakeasyBase));
export { GoogleCloudRunV2Condition };
