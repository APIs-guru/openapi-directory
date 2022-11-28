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
import { EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats } from "./enterprisecrmeventbusprototaskexecutiondetailstaskattemptstats";
export var EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum;
(function (EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum) {
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Unspecified"] = "UNSPECIFIED";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["PendingExecution"] = "PENDING_EXECUTION";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["InProcess"] = "IN_PROCESS";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Succeed"] = "SUCCEED";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Failed"] = "FAILED";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Fatal"] = "FATAL";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["RetryOnHold"] = "RETRY_ON_HOLD";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Skipped"] = "SKIPPED";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Canceled"] = "CANCELED";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["PendingRollback"] = "PENDING_ROLLBACK";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["RollbackInProcess"] = "ROLLBACK_IN_PROCESS";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Rolledback"] = "ROLLEDBACK";
    EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum["Suspended"] = "SUSPENDED";
})(EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum || (EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum = {}));
// EnterpriseCrmEventbusProtoTaskExecutionDetails
/**
 * Contains the details of the execution of this task. Next available id: 11
**/
var EnterpriseCrmEventbusProtoTaskExecutionDetails = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoTaskExecutionDetails, _super);
    function EnterpriseCrmEventbusProtoTaskExecutionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskAttemptStats", elemType: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats }),
        __metadata("design:type", Array)
    ], EnterpriseCrmEventbusProtoTaskExecutionDetails.prototype, "taskAttemptStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskExecutionState" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskExecutionDetails.prototype, "taskExecutionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=taskNumber" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoTaskExecutionDetails.prototype, "taskNumber", void 0);
    return EnterpriseCrmEventbusProtoTaskExecutionDetails;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoTaskExecutionDetails };
