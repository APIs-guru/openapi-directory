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
import { IpMapping } from "./ipmapping";
import { SslCert } from "./sslcert";
export var ConnectSettingsBackendTypeEnum;
(function (ConnectSettingsBackendTypeEnum) {
    ConnectSettingsBackendTypeEnum["SqlBackendTypeUnspecified"] = "SQL_BACKEND_TYPE_UNSPECIFIED";
    ConnectSettingsBackendTypeEnum["FirstGen"] = "FIRST_GEN";
    ConnectSettingsBackendTypeEnum["SecondGen"] = "SECOND_GEN";
    ConnectSettingsBackendTypeEnum["External"] = "EXTERNAL";
})(ConnectSettingsBackendTypeEnum || (ConnectSettingsBackendTypeEnum = {}));
export var ConnectSettingsDatabaseVersionEnum;
(function (ConnectSettingsDatabaseVersionEnum) {
    ConnectSettingsDatabaseVersionEnum["SqlDatabaseVersionUnspecified"] = "SQL_DATABASE_VERSION_UNSPECIFIED";
    ConnectSettingsDatabaseVersionEnum["Mysql51"] = "MYSQL_5_1";
    ConnectSettingsDatabaseVersionEnum["Mysql55"] = "MYSQL_5_5";
    ConnectSettingsDatabaseVersionEnum["Mysql56"] = "MYSQL_5_6";
    ConnectSettingsDatabaseVersionEnum["Mysql57"] = "MYSQL_5_7";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2017Standard"] = "SQLSERVER_2017_STANDARD";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2017Enterprise"] = "SQLSERVER_2017_ENTERPRISE";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2017Express"] = "SQLSERVER_2017_EXPRESS";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2017Web"] = "SQLSERVER_2017_WEB";
    ConnectSettingsDatabaseVersionEnum["Postgres96"] = "POSTGRES_9_6";
    ConnectSettingsDatabaseVersionEnum["Postgres10"] = "POSTGRES_10";
    ConnectSettingsDatabaseVersionEnum["Postgres11"] = "POSTGRES_11";
    ConnectSettingsDatabaseVersionEnum["Postgres12"] = "POSTGRES_12";
    ConnectSettingsDatabaseVersionEnum["Postgres13"] = "POSTGRES_13";
    ConnectSettingsDatabaseVersionEnum["Postgres14"] = "POSTGRES_14";
    ConnectSettingsDatabaseVersionEnum["Mysql80"] = "MYSQL_8_0";
    ConnectSettingsDatabaseVersionEnum["Mysql8018"] = "MYSQL_8_0_18";
    ConnectSettingsDatabaseVersionEnum["Mysql8026"] = "MYSQL_8_0_26";
    ConnectSettingsDatabaseVersionEnum["Mysql8027"] = "MYSQL_8_0_27";
    ConnectSettingsDatabaseVersionEnum["Mysql8028"] = "MYSQL_8_0_28";
    ConnectSettingsDatabaseVersionEnum["Mysql8029"] = "MYSQL_8_0_29";
    ConnectSettingsDatabaseVersionEnum["Mysql8030"] = "MYSQL_8_0_30";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2019Standard"] = "SQLSERVER_2019_STANDARD";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2019Enterprise"] = "SQLSERVER_2019_ENTERPRISE";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2019Express"] = "SQLSERVER_2019_EXPRESS";
    ConnectSettingsDatabaseVersionEnum["Sqlserver2019Web"] = "SQLSERVER_2019_WEB";
})(ConnectSettingsDatabaseVersionEnum || (ConnectSettingsDatabaseVersionEnum = {}));
// ConnectSettings
/**
 * Connect settings retrieval response.
**/
var ConnectSettings = /** @class */ (function (_super) {
    __extends(ConnectSettings, _super);
    function ConnectSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendType" }),
        __metadata("design:type", String)
    ], ConnectSettings.prototype, "backendType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseVersion" }),
        __metadata("design:type", String)
    ], ConnectSettings.prototype, "databaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddresses", elemType: IpMapping }),
        __metadata("design:type", Array)
    ], ConnectSettings.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], ConnectSettings.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], ConnectSettings.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverCaCert" }),
        __metadata("design:type", SslCert)
    ], ConnectSettings.prototype, "serverCaCert", void 0);
    return ConnectSettings;
}(SpeakeasyBase));
export { ConnectSettings };
