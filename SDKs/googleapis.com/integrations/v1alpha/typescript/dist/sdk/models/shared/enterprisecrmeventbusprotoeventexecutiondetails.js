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
import { EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats } from "./enterprisecrmeventbusprotoeventexecutiondetailseventattemptstats";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshot } from "./enterprisecrmeventbusprotoeventexecutionsnapshot";
export var EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum;
(function (EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum) {
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["Unspecified"] = "UNSPECIFIED";
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["OnHold"] = "ON_HOLD";
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["InProcess"] = "IN_PROCESS";
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["Succeeded"] = "SUCCEEDED";
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["Failed"] = "FAILED";
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["Canceled"] = "CANCELED";
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["RetryOnHold"] = "RETRY_ON_HOLD";
    EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum["Suspended"] = "SUSPENDED";
})(EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum || (EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum = {}));
// EnterpriseCrmEventbusProtoEventExecutionDetails
/**
 * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
**/
var EnterpriseCrmEventbusProtoEventExecutionDetails = /** @class */ (function (_super) {
    __extends(EnterpriseCrmEventbusProtoEventExecutionDetails, _super);
    function EnterpriseCrmEventbusProtoEventExecutionDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventAttemptStats", elemType: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats }),
        __metadata("design:type", Array)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "eventAttemptStats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionSnapshot", elemType: EnterpriseCrmEventbusProtoEventExecutionSnapshot }),
        __metadata("design:type", Array)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "eventExecutionSnapshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventExecutionState" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "eventExecutionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventRetriesFromBeginningCount" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "eventRetriesFromBeginningCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logFilePath" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "logFilePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkAddress" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "networkAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nextExecutionTime" }),
        __metadata("design:type", String)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "nextExecutionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ryeLockUnheldCount" }),
        __metadata("design:type", Number)
    ], EnterpriseCrmEventbusProtoEventExecutionDetails.prototype, "ryeLockUnheldCount", void 0);
    return EnterpriseCrmEventbusProtoEventExecutionDetails;
}(SpeakeasyBase));
export { EnterpriseCrmEventbusProtoEventExecutionDetails };
