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
import { AlloyDbConnectionProfileInput } from "./alloydbconnectionprofile";
import { CloudSqlConnectionProfileInput } from "./cloudsqlconnectionprofile";
import { Status } from "./status";
import { MySqlConnectionProfileInput } from "./mysqlconnectionprofile";
import { PostgreSqlConnectionProfileInput } from "./postgresqlconnectionprofile";
import { AlloyDbConnectionProfile } from "./alloydbconnectionprofile";
import { CloudSqlConnectionProfile } from "./cloudsqlconnectionprofile";
import { MySqlConnectionProfile } from "./mysqlconnectionprofile";
import { PostgreSqlConnectionProfile } from "./postgresqlconnectionprofile";
export var ConnectionProfileProviderEnum;
(function (ConnectionProfileProviderEnum) {
    ConnectionProfileProviderEnum["DatabaseProviderUnspecified"] = "DATABASE_PROVIDER_UNSPECIFIED";
    ConnectionProfileProviderEnum["Cloudsql"] = "CLOUDSQL";
    ConnectionProfileProviderEnum["Rds"] = "RDS";
    ConnectionProfileProviderEnum["Aurora"] = "AURORA";
    ConnectionProfileProviderEnum["Alloydb"] = "ALLOYDB";
})(ConnectionProfileProviderEnum || (ConnectionProfileProviderEnum = {}));
export var ConnectionProfileStateEnum;
(function (ConnectionProfileStateEnum) {
    ConnectionProfileStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    ConnectionProfileStateEnum["Draft"] = "DRAFT";
    ConnectionProfileStateEnum["Creating"] = "CREATING";
    ConnectionProfileStateEnum["Ready"] = "READY";
    ConnectionProfileStateEnum["Updating"] = "UPDATING";
    ConnectionProfileStateEnum["Deleting"] = "DELETING";
    ConnectionProfileStateEnum["Deleted"] = "DELETED";
    ConnectionProfileStateEnum["Failed"] = "FAILED";
})(ConnectionProfileStateEnum || (ConnectionProfileStateEnum = {}));
// ConnectionProfileInput
/**
 * A connection profile definition.
**/
var ConnectionProfileInput = /** @class */ (function (_super) {
    __extends(ConnectionProfileInput, _super);
    function ConnectionProfileInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alloydb" }),
        __metadata("design:type", AlloyDbConnectionProfileInput)
    ], ConnectionProfileInput.prototype, "alloydb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudsql" }),
        __metadata("design:type", CloudSqlConnectionProfileInput)
    ], ConnectionProfileInput.prototype, "cloudsql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], ConnectionProfileInput.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectionProfileInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysql" }),
        __metadata("design:type", MySqlConnectionProfileInput)
    ], ConnectionProfileInput.prototype, "mysql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postgresql" }),
        __metadata("design:type", PostgreSqlConnectionProfileInput)
    ], ConnectionProfileInput.prototype, "postgresql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ConnectionProfileInput.prototype, "state", void 0);
    return ConnectionProfileInput;
}(SpeakeasyBase));
export { ConnectionProfileInput };
// ConnectionProfile
/**
 * A connection profile definition.
**/
var ConnectionProfile = /** @class */ (function (_super) {
    __extends(ConnectionProfile, _super);
    function ConnectionProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alloydb" }),
        __metadata("design:type", AlloyDbConnectionProfile)
    ], ConnectionProfile.prototype, "alloydb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudsql" }),
        __metadata("design:type", CloudSqlConnectionProfile)
    ], ConnectionProfile.prototype, "cloudsql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", Status)
    ], ConnectionProfile.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ConnectionProfile.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mysql" }),
        __metadata("design:type", MySqlConnectionProfile)
    ], ConnectionProfile.prototype, "mysql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postgresql" }),
        __metadata("design:type", PostgreSqlConnectionProfile)
    ], ConnectionProfile.prototype, "postgresql", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ConnectionProfile.prototype, "updateTime", void 0);
    return ConnectionProfile;
}(SpeakeasyBase));
export { ConnectionProfile };
