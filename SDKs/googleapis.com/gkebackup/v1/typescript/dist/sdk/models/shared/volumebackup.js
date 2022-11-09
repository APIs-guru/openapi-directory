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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespacedName } from "./namespacedname";
export var VolumeBackupFormatEnum;
(function (VolumeBackupFormatEnum) {
    VolumeBackupFormatEnum["VolumeBackupFormatUnspecified"] = "VOLUME_BACKUP_FORMAT_UNSPECIFIED";
    VolumeBackupFormatEnum["GcePersistentDisk"] = "GCE_PERSISTENT_DISK";
})(VolumeBackupFormatEnum || (VolumeBackupFormatEnum = {}));
export var VolumeBackupStateEnum;
(function (VolumeBackupStateEnum) {
    VolumeBackupStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    VolumeBackupStateEnum["Creating"] = "CREATING";
    VolumeBackupStateEnum["Snapshotting"] = "SNAPSHOTTING";
    VolumeBackupStateEnum["Uploading"] = "UPLOADING";
    VolumeBackupStateEnum["Succeeded"] = "SUCCEEDED";
    VolumeBackupStateEnum["Failed"] = "FAILED";
    VolumeBackupStateEnum["Deleting"] = "DELETING";
})(VolumeBackupStateEnum || (VolumeBackupStateEnum = {}));
// VolumeBackup
/**
 * Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14
**/
var VolumeBackup = /** @class */ (function (_super) {
    __extends(VolumeBackup, _super);
    function VolumeBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=completeTime" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "completeTime", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=diskSizeBytes" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "diskSizeBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=sourcePvc" }),
        __metadata("design:type", NamespacedName)
    ], VolumeBackup.prototype, "sourcePvc", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "stateMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=storageBytes" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "storageBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "uid", void 0);
    __decorate([
        Metadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "updateTime", void 0);
    __decorate([
        Metadata({ data: "json, name=volumeBackupHandle" }),
        __metadata("design:type", String)
    ], VolumeBackup.prototype, "volumeBackupHandle", void 0);
    return VolumeBackup;
}(SpeakeasyBase));
export { VolumeBackup };
