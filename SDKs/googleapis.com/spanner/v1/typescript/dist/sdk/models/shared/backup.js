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
import { EncryptionInfo } from "./encryptioninfo";
import { EncryptionInfoInput } from "./encryptioninfo";
export var BackupDatabaseDialectEnum;
(function (BackupDatabaseDialectEnum) {
    BackupDatabaseDialectEnum["DatabaseDialectUnspecified"] = "DATABASE_DIALECT_UNSPECIFIED";
    BackupDatabaseDialectEnum["GoogleStandardSql"] = "GOOGLE_STANDARD_SQL";
    BackupDatabaseDialectEnum["Postgresql"] = "POSTGRESQL";
})(BackupDatabaseDialectEnum || (BackupDatabaseDialectEnum = {}));
export var BackupStateEnum;
(function (BackupStateEnum) {
    BackupStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    BackupStateEnum["Creating"] = "CREATING";
    BackupStateEnum["Ready"] = "READY";
})(BackupStateEnum || (BackupStateEnum = {}));
// Backup
/**
 * A backup of a Cloud Spanner database.
**/
var Backup = /** @class */ (function (_super) {
    __extends(Backup, _super);
    function Backup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], Backup.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseDialect" }),
        __metadata("design:type", String)
    ], Backup.prototype, "databaseDialect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionInfo" }),
        __metadata("design:type", EncryptionInfo)
    ], Backup.prototype, "encryptionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxExpireTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "maxExpireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Backup.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referencingBackups" }),
        __metadata("design:type", Array)
    ], Backup.prototype, "referencingBackups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=referencingDatabases" }),
        __metadata("design:type", Array)
    ], Backup.prototype, "referencingDatabases", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizeBytes" }),
        __metadata("design:type", String)
    ], Backup.prototype, "sizeBytes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Backup.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionTime" }),
        __metadata("design:type", String)
    ], Backup.prototype, "versionTime", void 0);
    return Backup;
}(SpeakeasyBase));
export { Backup };
// BackupInput
/**
 * A backup of a Cloud Spanner database.
**/
var BackupInput = /** @class */ (function (_super) {
    __extends(BackupInput, _super);
    function BackupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database" }),
        __metadata("design:type", String)
    ], BackupInput.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionInfo" }),
        __metadata("design:type", EncryptionInfoInput)
    ], BackupInput.prototype, "encryptionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], BackupInput.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], BackupInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionTime" }),
        __metadata("design:type", String)
    ], BackupInput.prototype, "versionTime", void 0);
    return BackupInput;
}(SpeakeasyBase));
export { BackupInput };
