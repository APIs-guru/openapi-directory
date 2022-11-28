import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum SettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    Always = "ALWAYS",
    Never = "NEVER",
    OnDemand = "ON_DEMAND"
}
export declare enum SettingsAvailabilityTypeEnum {
    SqlAvailabilityTypeUnspecified = "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    Zonal = "ZONAL",
    Regional = "REGIONAL"
}
export declare enum SettingsConnectorEnforcementEnum {
    ConnectorEnforcementUnspecified = "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    NotRequired = "NOT_REQUIRED",
    Required = "REQUIRED"
}
export declare enum SettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    PdSsd = "PD_SSD",
    PdHdd = "PD_HDD",
    ObsoleteLocalSsd = "OBSOLETE_LOCAL_SSD"
}
export declare enum SettingsPricingPlanEnum {
    SqlPricingPlanUnspecified = "SQL_PRICING_PLAN_UNSPECIFIED",
    Package = "PACKAGE",
    PerUse = "PER_USE"
}
export declare enum SettingsReplicationTypeEnum {
    SqlReplicationTypeUnspecified = "SQL_REPLICATION_TYPE_UNSPECIFIED",
    Synchronous = "SYNCHRONOUS",
    Asynchronous = "ASYNCHRONOUS"
}
/**
 * Database instance settings.
**/
export declare class Settings extends SpeakeasyBase {
    activationPolicy?: SettingsActivationPolicyEnum;
    activeDirectoryConfig?: SqlActiveDirectoryConfig;
    authorizedGaeApplications?: string[];
    availabilityType?: SettingsAvailabilityTypeEnum;
    backupConfiguration?: BackupConfiguration;
    collation?: string;
    connectorEnforcement?: SettingsConnectorEnforcementEnum;
    crashSafeReplicationEnabled?: boolean;
    dataDiskSizeGb?: string;
    dataDiskType?: SettingsDataDiskTypeEnum;
    databaseFlags?: DatabaseFlags[];
    databaseReplicationEnabled?: boolean;
    deletionProtectionEnabled?: boolean;
    denyMaintenancePeriods?: DenyMaintenancePeriod[];
    insightsConfig?: InsightsConfig;
    ipConfiguration?: IpConfiguration;
    kind?: string;
    locationPreference?: LocationPreference;
    maintenanceWindow?: MaintenanceWindow;
    passwordValidationPolicy?: PasswordValidationPolicy;
    pricingPlan?: SettingsPricingPlanEnum;
    replicationType?: SettingsReplicationTypeEnum;
    settingsVersion?: string;
    sqlServerAuditConfig?: SqlServerAuditConfig;
    storageAutoResize?: boolean;
    storageAutoResizeLimit?: string;
    tier?: string;
    timeZone?: string;
    userLabels?: Map<string, string>;
}
