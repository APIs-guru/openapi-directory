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
import { SqlIpConfig } from "./sqlipconfig";
export var CloudSqlSettingsActivationPolicyEnum;
(function (CloudSqlSettingsActivationPolicyEnum) {
    CloudSqlSettingsActivationPolicyEnum["SqlActivationPolicyUnspecified"] = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
    CloudSqlSettingsActivationPolicyEnum["Always"] = "ALWAYS";
    CloudSqlSettingsActivationPolicyEnum["Never"] = "NEVER";
})(CloudSqlSettingsActivationPolicyEnum || (CloudSqlSettingsActivationPolicyEnum = {}));
export var CloudSqlSettingsAvailabilityTypeEnum;
(function (CloudSqlSettingsAvailabilityTypeEnum) {
    CloudSqlSettingsAvailabilityTypeEnum["SqlAvailabilityTypeUnspecified"] = "SQL_AVAILABILITY_TYPE_UNSPECIFIED";
    CloudSqlSettingsAvailabilityTypeEnum["Zonal"] = "ZONAL";
    CloudSqlSettingsAvailabilityTypeEnum["Regional"] = "REGIONAL";
})(CloudSqlSettingsAvailabilityTypeEnum || (CloudSqlSettingsAvailabilityTypeEnum = {}));
export var CloudSqlSettingsDataDiskTypeEnum;
(function (CloudSqlSettingsDataDiskTypeEnum) {
    CloudSqlSettingsDataDiskTypeEnum["SqlDataDiskTypeUnspecified"] = "SQL_DATA_DISK_TYPE_UNSPECIFIED";
    CloudSqlSettingsDataDiskTypeEnum["PdSsd"] = "PD_SSD";
    CloudSqlSettingsDataDiskTypeEnum["PdHdd"] = "PD_HDD";
})(CloudSqlSettingsDataDiskTypeEnum || (CloudSqlSettingsDataDiskTypeEnum = {}));
export var CloudSqlSettingsDatabaseVersionEnum;
(function (CloudSqlSettingsDatabaseVersionEnum) {
    CloudSqlSettingsDatabaseVersionEnum["SqlDatabaseVersionUnspecified"] = "SQL_DATABASE_VERSION_UNSPECIFIED";
    CloudSqlSettingsDatabaseVersionEnum["Mysql56"] = "MYSQL_5_6";
    CloudSqlSettingsDatabaseVersionEnum["Mysql57"] = "MYSQL_5_7";
    CloudSqlSettingsDatabaseVersionEnum["Postgres96"] = "POSTGRES_9_6";
    CloudSqlSettingsDatabaseVersionEnum["Postgres11"] = "POSTGRES_11";
    CloudSqlSettingsDatabaseVersionEnum["Postgres10"] = "POSTGRES_10";
    CloudSqlSettingsDatabaseVersionEnum["Mysql80"] = "MYSQL_8_0";
    CloudSqlSettingsDatabaseVersionEnum["Postgres12"] = "POSTGRES_12";
    CloudSqlSettingsDatabaseVersionEnum["Postgres13"] = "POSTGRES_13";
    CloudSqlSettingsDatabaseVersionEnum["Postgres14"] = "POSTGRES_14";
})(CloudSqlSettingsDatabaseVersionEnum || (CloudSqlSettingsDatabaseVersionEnum = {}));
// CloudSqlSettings
/**
 * Settings for creating a Cloud SQL database instance.
**/
var CloudSqlSettings = /** @class */ (function (_super) {
    __extends(CloudSqlSettings, _super);
    function CloudSqlSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationPolicy" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "activationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoStorageIncrease" }),
        __metadata("design:type", Boolean)
    ], CloudSqlSettings.prototype, "autoStorageIncrease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityType" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "availabilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmekKeyName" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "cmekKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collation" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "collation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "dataDiskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDiskType" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "dataDiskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseFlags" }),
        __metadata("design:type", Map)
    ], CloudSqlSettings.prototype, "databaseFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseVersion" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "databaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipConfig" }),
        __metadata("design:type", SqlIpConfig)
    ], CloudSqlSettings.prototype, "ipConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootPassword" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "rootPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootPasswordSet" }),
        __metadata("design:type", Boolean)
    ], CloudSqlSettings.prototype, "rootPasswordSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryZone" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "secondaryZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageAutoResizeLimit" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "storageAutoResizeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], CloudSqlSettings.prototype, "userLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], CloudSqlSettings.prototype, "zone", void 0);
    return CloudSqlSettings;
}(SpeakeasyBase));
export { CloudSqlSettings };
// CloudSqlSettingsInput
/**
 * Settings for creating a Cloud SQL database instance.
**/
var CloudSqlSettingsInput = /** @class */ (function (_super) {
    __extends(CloudSqlSettingsInput, _super);
    function CloudSqlSettingsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationPolicy" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "activationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoStorageIncrease" }),
        __metadata("design:type", Boolean)
    ], CloudSqlSettingsInput.prototype, "autoStorageIncrease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityType" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "availabilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cmekKeyName" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "cmekKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collation" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "collation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "dataDiskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDiskType" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "dataDiskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseFlags" }),
        __metadata("design:type", Map)
    ], CloudSqlSettingsInput.prototype, "databaseFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseVersion" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "databaseVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipConfig" }),
        __metadata("design:type", SqlIpConfig)
    ], CloudSqlSettingsInput.prototype, "ipConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootPassword" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "rootPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondaryZone" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "secondaryZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceId" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageAutoResizeLimit" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "storageAutoResizeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], CloudSqlSettingsInput.prototype, "userLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], CloudSqlSettingsInput.prototype, "zone", void 0);
    return CloudSqlSettingsInput;
}(SpeakeasyBase));
export { CloudSqlSettingsInput };
