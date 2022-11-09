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
export var BackupSourceInstanceTierEnum;
(function (BackupSourceInstanceTierEnum) {
    BackupSourceInstanceTierEnum["TierUnspecified"] = "TIER_UNSPECIFIED";
    BackupSourceInstanceTierEnum["Standard"] = "STANDARD";
    BackupSourceInstanceTierEnum["Premium"] = "PREMIUM";
    BackupSourceInstanceTierEnum["BasicHdd"] = "BASIC_HDD";
    BackupSourceInstanceTierEnum["BasicSsd"] = "BASIC_SSD";
    BackupSourceInstanceTierEnum["HighScaleSsd"] = "HIGH_SCALE_SSD";
    BackupSourceInstanceTierEnum["Enterprise"] = "ENTERPRISE";
})(BackupSourceInstanceTierEnum || (BackupSourceInstanceTierEnum = {}));
export var BackupStateEnum;
(function (BackupStateEnum) {
    BackupStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BackupStateEnum["Creating"] = "CREATING";
    BackupStateEnum["Finalizing"] = "FINALIZING";
    BackupStateEnum["Ready"] = "READY";
    BackupStateEnum["Deleting"] = "DELETING";
})(BackupStateEnum || (BackupStateEnum = {}));
// Backup
/**
 * A Filestore backup.
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=capacityGb" }),
        __metadata("design:type", String)
    ], Backup.prototype, "capacityGb", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Backup.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=downloadBytes" }),
        __metadata("design:type", String)
    ], Backup.prototype, "downloadBytes", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], Backup.prototype, "kmsKeyName", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Backup.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Backup.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=satisfiesPzs" }),
        __metadata("design:type", Boolean)
    ], Backup.prototype, "satisfiesPzs", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceFileShare" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceFileShare", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceInstance" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceInstance", void 0);
    __decorate([
        Metadata({ data: "json, name=sourceInstanceTier" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sourceInstanceTier", void 0);
    __decorate([
        Metadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Backup.prototype, "state", void 0);
    __decorate([
        Metadata({ data: "json, name=storageBytes" }),
        __metadata("design:type", String)
    ], Backup.prototype, "storageBytes", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
