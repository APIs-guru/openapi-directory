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
import { BackupContext } from "./backupcontext";
import { OperationErrors } from "./operationerrors";
import { ExportContext } from "./exportcontext";
import { ImportContext } from "./importcontext";
export var OperationOperationTypeEnum;
(function (OperationOperationTypeEnum) {
    OperationOperationTypeEnum["SqlOperationTypeUnspecified"] = "SQL_OPERATION_TYPE_UNSPECIFIED";
    OperationOperationTypeEnum["Import"] = "IMPORT";
    OperationOperationTypeEnum["Export"] = "EXPORT";
    OperationOperationTypeEnum["Create"] = "CREATE";
    OperationOperationTypeEnum["Update"] = "UPDATE";
    OperationOperationTypeEnum["Delete"] = "DELETE";
    OperationOperationTypeEnum["Restart"] = "RESTART";
    OperationOperationTypeEnum["Backup"] = "BACKUP";
    OperationOperationTypeEnum["Snapshot"] = "SNAPSHOT";
    OperationOperationTypeEnum["BackupVolume"] = "BACKUP_VOLUME";
    OperationOperationTypeEnum["DeleteVolume"] = "DELETE_VOLUME";
    OperationOperationTypeEnum["RestoreVolume"] = "RESTORE_VOLUME";
    OperationOperationTypeEnum["InjectUser"] = "INJECT_USER";
    OperationOperationTypeEnum["Clone"] = "CLONE";
    OperationOperationTypeEnum["StopReplica"] = "STOP_REPLICA";
    OperationOperationTypeEnum["StartReplica"] = "START_REPLICA";
    OperationOperationTypeEnum["PromoteReplica"] = "PROMOTE_REPLICA";
    OperationOperationTypeEnum["CreateReplica"] = "CREATE_REPLICA";
    OperationOperationTypeEnum["CreateUser"] = "CREATE_USER";
    OperationOperationTypeEnum["DeleteUser"] = "DELETE_USER";
    OperationOperationTypeEnum["UpdateUser"] = "UPDATE_USER";
    OperationOperationTypeEnum["CreateDatabase"] = "CREATE_DATABASE";
    OperationOperationTypeEnum["DeleteDatabase"] = "DELETE_DATABASE";
    OperationOperationTypeEnum["UpdateDatabase"] = "UPDATE_DATABASE";
    OperationOperationTypeEnum["Failover"] = "FAILOVER";
    OperationOperationTypeEnum["DeleteBackup"] = "DELETE_BACKUP";
    OperationOperationTypeEnum["RecreateReplica"] = "RECREATE_REPLICA";
    OperationOperationTypeEnum["TruncateLog"] = "TRUNCATE_LOG";
    OperationOperationTypeEnum["DemoteMaster"] = "DEMOTE_MASTER";
    OperationOperationTypeEnum["Maintenance"] = "MAINTENANCE";
    OperationOperationTypeEnum["EnablePrivateIp"] = "ENABLE_PRIVATE_IP";
    OperationOperationTypeEnum["DeferMaintenance"] = "DEFER_MAINTENANCE";
    OperationOperationTypeEnum["CreateClone"] = "CREATE_CLONE";
    OperationOperationTypeEnum["RescheduleMaintenance"] = "RESCHEDULE_MAINTENANCE";
    OperationOperationTypeEnum["StartExternalSync"] = "START_EXTERNAL_SYNC";
    OperationOperationTypeEnum["LogCleanup"] = "LOG_CLEANUP";
    OperationOperationTypeEnum["AutoRestart"] = "AUTO_RESTART";
})(OperationOperationTypeEnum || (OperationOperationTypeEnum = {}));
export var OperationStatusEnum;
(function (OperationStatusEnum) {
    OperationStatusEnum["SqlOperationStatusUnspecified"] = "SQL_OPERATION_STATUS_UNSPECIFIED";
    OperationStatusEnum["Pending"] = "PENDING";
    OperationStatusEnum["Running"] = "RUNNING";
    OperationStatusEnum["Done"] = "DONE";
})(OperationStatusEnum || (OperationStatusEnum = {}));
// Operation
/**
 * An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.
**/
var Operation = /** @class */ (function (_super) {
    __extends(Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupContext" }),
        __metadata("design:type", BackupContext)
    ], Operation.prototype, "backupContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", OperationErrors)
    ], Operation.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exportContext" }),
        __metadata("design:type", ExportContext)
    ], Operation.prototype, "exportContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=importContext" }),
        __metadata("design:type", ImportContext)
    ], Operation.prototype, "importContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insertTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "insertTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Operation.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Operation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationType" }),
        __metadata("design:type", String)
    ], Operation.prototype, "operationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Operation.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Operation.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Operation.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetId" }),
        __metadata("design:type", String)
    ], Operation.prototype, "targetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetLink" }),
        __metadata("design:type", String)
    ], Operation.prototype, "targetLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetProject" }),
        __metadata("design:type", String)
    ], Operation.prototype, "targetProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], Operation.prototype, "user", void 0);
    return Operation;
}(SpeakeasyBase));
export { Operation };
