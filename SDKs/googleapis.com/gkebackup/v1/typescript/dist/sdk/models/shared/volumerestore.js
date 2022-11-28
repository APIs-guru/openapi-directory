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
import { NamespacedName } from "./namespacedname";
export var VolumeRestoreStateEnum;
(function (VolumeRestoreStateEnum) {
    VolumeRestoreStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    VolumeRestoreStateEnum["Creating"] = "CREATING";
    VolumeRestoreStateEnum["Restoring"] = "RESTORING";
    VolumeRestoreStateEnum["Succeeded"] = "SUCCEEDED";
    VolumeRestoreStateEnum["Failed"] = "FAILED";
    VolumeRestoreStateEnum["Deleting"] = "DELETING";
})(VolumeRestoreStateEnum || (VolumeRestoreStateEnum = {}));
export var VolumeRestoreVolumeTypeEnum;
(function (VolumeRestoreVolumeTypeEnum) {
    VolumeRestoreVolumeTypeEnum["VolumeTypeUnspecified"] = "VOLUME_TYPE_UNSPECIFIED";
    VolumeRestoreVolumeTypeEnum["GcePersistentDisk"] = "GCE_PERSISTENT_DISK";
})(VolumeRestoreVolumeTypeEnum || (VolumeRestoreVolumeTypeEnum = {}));
// VolumeRestore
/**
 * Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
**/
var VolumeRestore = /** @class */ (function (_super) {
    __extends(VolumeRestore, _super);
    function VolumeRestore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completeTime" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "completeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stateMessage" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "stateMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPvc" }),
        __metadata("design:type", NamespacedName)
    ], VolumeRestore.prototype, "targetPvc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeBackup" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "volumeBackup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeHandle" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "volumeHandle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeType" }),
        __metadata("design:type", String)
    ], VolumeRestore.prototype, "volumeType", void 0);
    return VolumeRestore;
}(SpeakeasyBase));
export { VolumeRestore };
