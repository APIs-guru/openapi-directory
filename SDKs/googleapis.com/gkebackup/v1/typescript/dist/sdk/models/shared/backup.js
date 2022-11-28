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
import { ClusterMetadata } from "./clustermetadata";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
export var BackupStateEnum;
(function (BackupStateEnum) {
    BackupStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BackupStateEnum["Creating"] = "CREATING";
    BackupStateEnum["InProgress"] = "IN_PROGRESS";
    BackupStateEnum["Succeeded"] = "SUCCEEDED";
    BackupStateEnum["Failed"] = "FAILED";
    BackupStateEnum["Deleting"] = "DELETING";
})(BackupStateEnum || (BackupStateEnum = {}));
// BackupInput
/**
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
var BackupInput = /** @class */ (function (_super) {
    __extends(BackupInput, _super);
    function BackupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterMetadata" }),
        __metadata("design:type", ClusterMetadata)
    ], BackupInput.prototype, "clusterMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteLockDays" }),
        __metadata("design:type", Number)
    ], BackupInput.prototype, "deleteLockDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BackupInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", EncryptionKey)
    ], BackupInput.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], BackupInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retainDays" }),
        __metadata("design:type", Number)
    ], BackupInput.prototype, "retainDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedApplications" }),
        __metadata("design:type", NamespacedNames)
    ], BackupInput.prototype, "selectedApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedNamespaces" }),
        __metadata("design:type", Namespaces)
    ], BackupInput.prototype, "selectedNamespaces", void 0);
    return BackupInput;
}(SpeakeasyBase));
export { BackupInput };
// Backup
/**
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allNamespaces" }),
        __metadata("design:type", Boolean)
    ], Backup.prototype, "allNamespaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterMetadata" }),
        __metadata("design:type", ClusterMetadata)
    ], Backup.prototype, "clusterMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completeTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "completeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configBackupSizeBytes" }),
        __metadata("design:type", String)
    ], Backup.prototype, "configBackupSizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containsSecrets" }),
        __metadata("design:type", Boolean)
    ], Backup.prototype, "containsSecrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containsVolumeData" }),
        __metadata("design:type", Boolean)
    ], Backup.prototype, "containsVolumeData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteLockDays" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "deleteLockDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteLockExpireTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "deleteLockExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Backup.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionKey" }),
        __metadata("design:type", EncryptionKey)
    ], Backup.prototype, "encryptionKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Backup.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Backup.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manual" }),
        __metadata("design:type", Boolean)
    ], Backup.prototype, "manual", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Backup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=podCount" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "podCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceCount" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "resourceCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retainDays" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "retainDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retainExpireTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "retainExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedApplications" }),
        __metadata("design:type", NamespacedNames)
    ], Backup.prototype, "selectedApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selectedNamespaces" }),
        __metadata("design:type", Namespaces)
    ], Backup.prototype, "selectedNamespaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeBytes" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Backup.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateReason" }),
        __metadata("design:type", String)
    ], Backup.prototype, "stateReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], Backup.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeCount" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "volumeCount", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
