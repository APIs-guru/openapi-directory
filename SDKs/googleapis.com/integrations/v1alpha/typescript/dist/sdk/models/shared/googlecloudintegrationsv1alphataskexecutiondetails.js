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
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
export var GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum;
(function (GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum) {
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["TaskExecutionStateUnspecified"] = "TASK_EXECUTION_STATE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["PendingExecution"] = "PENDING_EXECUTION";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["InProcess"] = "IN_PROCESS";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["Succeed"] = "SUCCEED";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["Failed"] = "FAILED";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["Fatal"] = "FATAL";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["RetryOnHold"] = "RETRY_ON_HOLD";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["Skipped"] = "SKIPPED";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["Cancelled"] = "CANCELLED";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["PendingRollback"] = "PENDING_ROLLBACK";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["RollbackInProcess"] = "ROLLBACK_IN_PROCESS";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["Rolledback"] = "ROLLEDBACK";
    GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum["Suspended"] = "SUSPENDED";
})(GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum || (GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum = {}));
// GoogleCloudIntegrationsV1alphaTaskExecutionDetails
/**
 * Contains the details of the execution of this task.
**/
var GoogleCloudIntegrationsV1alphaTaskExecutionDetails = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaTaskExecutionDetails, _super);
    function GoogleCloudIntegrationsV1alphaTaskExecutionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskAttemptStats", elemType: GoogleCloudIntegrationsV1alphaAttemptStats }),
        __metadata("design:type", Array)
    ], GoogleCloudIntegrationsV1alphaTaskExecutionDetails.prototype, "taskAttemptStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskExecutionState" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskExecutionDetails.prototype, "taskExecutionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaTaskExecutionDetails.prototype, "taskNumber", void 0);
    return GoogleCloudIntegrationsV1alphaTaskExecutionDetails;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaTaskExecutionDetails };
