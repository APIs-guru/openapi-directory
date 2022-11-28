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
import { EncryptionConfig } from "./encryptionconfig";
import { EncryptionInfo } from "./encryptioninfo";
import { RestoreInfo } from "./restoreinfo";
export var DatabaseDatabaseDialectEnum;
(function (DatabaseDatabaseDialectEnum) {
    DatabaseDatabaseDialectEnum["DatabaseDialectUnspecified"] = "DATABASE_DIALECT_UNSPECIFIED";
    DatabaseDatabaseDialectEnum["GoogleStandardSql"] = "GOOGLE_STANDARD_SQL";
    DatabaseDatabaseDialectEnum["Postgresql"] = "POSTGRESQL";
})(DatabaseDatabaseDialectEnum || (DatabaseDatabaseDialectEnum = {}));
export var DatabaseStateEnum;
(function (DatabaseStateEnum) {
    DatabaseStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    DatabaseStateEnum["Creating"] = "CREATING";
    DatabaseStateEnum["Ready"] = "READY";
    DatabaseStateEnum["ReadyOptimizing"] = "READY_OPTIMIZING";
})(DatabaseStateEnum || (DatabaseStateEnum = {}));
// Database
/**
 * A Cloud Spanner database.
**/
var Database = /** @class */ (function (_super) {
    __extends(Database, _super);
    function Database() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Database.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseDialect" }),
        __metadata("design:type", String)
    ], Database.prototype, "databaseDialect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLeader" }),
        __metadata("design:type", String)
    ], Database.prototype, "defaultLeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=earliestVersionTime" }),
        __metadata("design:type", String)
    ], Database.prototype, "earliestVersionTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionConfig" }),
        __metadata("design:type", EncryptionConfig)
    ], Database.prototype, "encryptionConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionInfo", elemType: EncryptionInfo }),
        __metadata("design:type", Array)
    ], Database.prototype, "encryptionInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Database.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restoreInfo" }),
        __metadata("design:type", RestoreInfo)
    ], Database.prototype, "restoreInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Database.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionRetentionPeriod" }),
        __metadata("design:type", String)
    ], Database.prototype, "versionRetentionPeriod", void 0);
    return Database;
}(SpeakeasyBase));
export { Database };
