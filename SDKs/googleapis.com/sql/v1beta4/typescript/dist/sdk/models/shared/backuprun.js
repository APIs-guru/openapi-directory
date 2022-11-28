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
import { DiskEncryptionConfiguration } from "./diskencryptionconfiguration";
import { DiskEncryptionStatus } from "./diskencryptionstatus";
import { OperationError } from "./operationerror";
export var BackupRunBackupKindEnum;
(function (BackupRunBackupKindEnum) {
    BackupRunBackupKindEnum["SqlBackupKindUnspecified"] = "SQL_BACKUP_KIND_UNSPECIFIED";
    BackupRunBackupKindEnum["Snapshot"] = "SNAPSHOT";
    BackupRunBackupKindEnum["Physical"] = "PHYSICAL";
})(BackupRunBackupKindEnum || (BackupRunBackupKindEnum = {}));
export var BackupRunStatusEnum;
(function (BackupRunStatusEnum) {
    BackupRunStatusEnum["SqlBackupRunStatusUnspecified"] = "SQL_BACKUP_RUN_STATUS_UNSPECIFIED";
    BackupRunStatusEnum["Enqueued"] = "ENQUEUED";
    BackupRunStatusEnum["Overdue"] = "OVERDUE";
    BackupRunStatusEnum["Running"] = "RUNNING";
    BackupRunStatusEnum["Failed"] = "FAILED";
    BackupRunStatusEnum["Successful"] = "SUCCESSFUL";
    BackupRunStatusEnum["Skipped"] = "SKIPPED";
    BackupRunStatusEnum["DeletionPending"] = "DELETION_PENDING";
    BackupRunStatusEnum["DeletionFailed"] = "DELETION_FAILED";
    BackupRunStatusEnum["Deleted"] = "DELETED";
})(BackupRunStatusEnum || (BackupRunStatusEnum = {}));
export var BackupRunTypeEnum;
(function (BackupRunTypeEnum) {
    BackupRunTypeEnum["SqlBackupRunTypeUnspecified"] = "SQL_BACKUP_RUN_TYPE_UNSPECIFIED";
    BackupRunTypeEnum["Automated"] = "AUTOMATED";
    BackupRunTypeEnum["OnDemand"] = "ON_DEMAND";
})(BackupRunTypeEnum || (BackupRunTypeEnum = {}));
// BackupRun
/**
 * A BackupRun resource.
**/
var BackupRun = /** @class */ (function (_super) {
    __extends(BackupRun, _super);
    function BackupRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupKind" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "backupKind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionConfiguration" }),
        __metadata("design:type", DiskEncryptionConfiguration)
    ], BackupRun.prototype, "diskEncryptionConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskEncryptionStatus" }),
        __metadata("design:type", DiskEncryptionStatus)
    ], BackupRun.prototype, "diskEncryptionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enqueuedTime" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "enqueuedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", OperationError)
    ], BackupRun.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windowStartTime" }),
        __metadata("design:type", String)
    ], BackupRun.prototype, "windowStartTime", void 0);
    return BackupRun;
}(SpeakeasyBase));
export { BackupRun };
