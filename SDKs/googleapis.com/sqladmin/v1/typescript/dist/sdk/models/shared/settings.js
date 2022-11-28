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
import { SqlActiveDirectoryConfig } from "./sqlactivedirectoryconfig";
import { BackupConfiguration } from "./backupconfiguration";
import { DatabaseFlags } from "./databaseflags";
import { DenyMaintenancePeriod } from "./denymaintenanceperiod";
import { InsightsConfig } from "./insightsconfig";
import { IpConfiguration } from "./ipconfiguration";
import { LocationPreference } from "./locationpreference";
import { MaintenanceWindow } from "./maintenancewindow";
import { PasswordValidationPolicy } from "./passwordvalidationpolicy";
import { SqlServerAuditConfig } from "./sqlserverauditconfig";
export var SettingsActivationPolicyEnum;
(function (SettingsActivationPolicyEnum) {
    SettingsActivationPolicyEnum["SqlActivationPolicyUnspecified"] = "SQL_ACTIVATION_POLICY_UNSPECIFIED";
    SettingsActivationPolicyEnum["Always"] = "ALWAYS";
    SettingsActivationPolicyEnum["Never"] = "NEVER";
    SettingsActivationPolicyEnum["OnDemand"] = "ON_DEMAND";
})(SettingsActivationPolicyEnum || (SettingsActivationPolicyEnum = {}));
export var SettingsAvailabilityTypeEnum;
(function (SettingsAvailabilityTypeEnum) {
    SettingsAvailabilityTypeEnum["SqlAvailabilityTypeUnspecified"] = "SQL_AVAILABILITY_TYPE_UNSPECIFIED";
    SettingsAvailabilityTypeEnum["Zonal"] = "ZONAL";
    SettingsAvailabilityTypeEnum["Regional"] = "REGIONAL";
})(SettingsAvailabilityTypeEnum || (SettingsAvailabilityTypeEnum = {}));
export var SettingsConnectorEnforcementEnum;
(function (SettingsConnectorEnforcementEnum) {
    SettingsConnectorEnforcementEnum["ConnectorEnforcementUnspecified"] = "CONNECTOR_ENFORCEMENT_UNSPECIFIED";
    SettingsConnectorEnforcementEnum["NotRequired"] = "NOT_REQUIRED";
    SettingsConnectorEnforcementEnum["Required"] = "REQUIRED";
})(SettingsConnectorEnforcementEnum || (SettingsConnectorEnforcementEnum = {}));
export var SettingsDataDiskTypeEnum;
(function (SettingsDataDiskTypeEnum) {
    SettingsDataDiskTypeEnum["SqlDataDiskTypeUnspecified"] = "SQL_DATA_DISK_TYPE_UNSPECIFIED";
    SettingsDataDiskTypeEnum["PdSsd"] = "PD_SSD";
    SettingsDataDiskTypeEnum["PdHdd"] = "PD_HDD";
    SettingsDataDiskTypeEnum["ObsoleteLocalSsd"] = "OBSOLETE_LOCAL_SSD";
})(SettingsDataDiskTypeEnum || (SettingsDataDiskTypeEnum = {}));
export var SettingsPricingPlanEnum;
(function (SettingsPricingPlanEnum) {
    SettingsPricingPlanEnum["SqlPricingPlanUnspecified"] = "SQL_PRICING_PLAN_UNSPECIFIED";
    SettingsPricingPlanEnum["Package"] = "PACKAGE";
    SettingsPricingPlanEnum["PerUse"] = "PER_USE";
})(SettingsPricingPlanEnum || (SettingsPricingPlanEnum = {}));
export var SettingsReplicationTypeEnum;
(function (SettingsReplicationTypeEnum) {
    SettingsReplicationTypeEnum["SqlReplicationTypeUnspecified"] = "SQL_REPLICATION_TYPE_UNSPECIFIED";
    SettingsReplicationTypeEnum["Synchronous"] = "SYNCHRONOUS";
    SettingsReplicationTypeEnum["Asynchronous"] = "ASYNCHRONOUS";
})(SettingsReplicationTypeEnum || (SettingsReplicationTypeEnum = {}));
// Settings
/**
 * Database instance settings.
**/
var Settings = /** @class */ (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activationPolicy" }),
        __metadata("design:type", String)
    ], Settings.prototype, "activationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=activeDirectoryConfig" }),
        __metadata("design:type", SqlActiveDirectoryConfig)
    ], Settings.prototype, "activeDirectoryConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedGaeApplications" }),
        __metadata("design:type", Array)
    ], Settings.prototype, "authorizedGaeApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availabilityType" }),
        __metadata("design:type", String)
    ], Settings.prototype, "availabilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backupConfiguration" }),
        __metadata("design:type", BackupConfiguration)
    ], Settings.prototype, "backupConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=collation" }),
        __metadata("design:type", String)
    ], Settings.prototype, "collation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connectorEnforcement" }),
        __metadata("design:type", String)
    ], Settings.prototype, "connectorEnforcement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=crashSafeReplicationEnabled" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "crashSafeReplicationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" }),
        __metadata("design:type", String)
    ], Settings.prototype, "dataDiskSizeGb", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataDiskType" }),
        __metadata("design:type", String)
    ], Settings.prototype, "dataDiskType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseFlags", elemType: DatabaseFlags }),
        __metadata("design:type", Array)
    ], Settings.prototype, "databaseFlags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseReplicationEnabled" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "databaseReplicationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletionProtectionEnabled" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "deletionProtectionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=denyMaintenancePeriods", elemType: DenyMaintenancePeriod }),
        __metadata("design:type", Array)
    ], Settings.prototype, "denyMaintenancePeriods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=insightsConfig" }),
        __metadata("design:type", InsightsConfig)
    ], Settings.prototype, "insightsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipConfiguration" }),
        __metadata("design:type", IpConfiguration)
    ], Settings.prototype, "ipConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Settings.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationPreference" }),
        __metadata("design:type", LocationPreference)
    ], Settings.prototype, "locationPreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceWindow" }),
        __metadata("design:type", MaintenanceWindow)
    ], Settings.prototype, "maintenanceWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordValidationPolicy" }),
        __metadata("design:type", PasswordValidationPolicy)
    ], Settings.prototype, "passwordValidationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricingPlan" }),
        __metadata("design:type", String)
    ], Settings.prototype, "pricingPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replicationType" }),
        __metadata("design:type", String)
    ], Settings.prototype, "replicationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingsVersion" }),
        __metadata("design:type", String)
    ], Settings.prototype, "settingsVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sqlServerAuditConfig" }),
        __metadata("design:type", SqlServerAuditConfig)
    ], Settings.prototype, "sqlServerAuditConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageAutoResize" }),
        __metadata("design:type", Boolean)
    ], Settings.prototype, "storageAutoResize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageAutoResizeLimit" }),
        __metadata("design:type", String)
    ], Settings.prototype, "storageAutoResizeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tier" }),
        __metadata("design:type", String)
    ], Settings.prototype, "tier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], Settings.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], Settings.prototype, "userLabels", void 0);
    return Settings;
}(SpeakeasyBase));
export { Settings };
