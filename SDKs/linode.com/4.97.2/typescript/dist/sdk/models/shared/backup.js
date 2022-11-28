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
import { FilesystemEnum } from "./filesystemenum";
var BackupDisks = /** @class */ (function (_super) {
    __extends(BackupDisks, _super);
    function BackupDisks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filesystem" }),
        __metadata("design:type", String)
    ], BackupDisks.prototype, "filesystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], BackupDisks.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], BackupDisks.prototype, "size", void 0);
    return BackupDisks;
}(SpeakeasyBase));
export { BackupDisks };
export var BackupStatusEnum;
(function (BackupStatusEnum) {
    BackupStatusEnum["Paused"] = "paused";
    BackupStatusEnum["Pending"] = "pending";
    BackupStatusEnum["Running"] = "running";
    BackupStatusEnum["NeedsPostProcessing"] = "needsPostProcessing";
    BackupStatusEnum["Successful"] = "successful";
    BackupStatusEnum["Failed"] = "failed";
    BackupStatusEnum["UserAborted"] = "userAborted";
})(BackupStatusEnum || (BackupStatusEnum = {}));
export var BackupTypeEnum;
(function (BackupTypeEnum) {
    BackupTypeEnum["Auto"] = "auto";
    BackupTypeEnum["Snapshot"] = "snapshot";
})(BackupTypeEnum || (BackupTypeEnum = {}));
// Backup
/**
 * An object representing a Backup or snapshot for a Linode with Backup service enabled.
 *
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configs" }),
        __metadata("design:type", Array)
    ], Backup.prototype, "configs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disks", elemType: BackupDisks }),
        __metadata("design:type", Array)
    ], Backup.prototype, "disks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Backup.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Backup.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Backup.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Backup.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Backup.prototype, "updated", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
