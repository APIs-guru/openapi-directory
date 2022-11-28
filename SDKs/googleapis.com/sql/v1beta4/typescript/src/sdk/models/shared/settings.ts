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


export enum SettingsActivationPolicyEnum {
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED",
    Always = "ALWAYS",
    Never = "NEVER",
    OnDemand = "ON_DEMAND"
}

export enum SettingsAvailabilityTypeEnum {
    SqlAvailabilityTypeUnspecified = "SQL_AVAILABILITY_TYPE_UNSPECIFIED",
    Zonal = "ZONAL",
    Regional = "REGIONAL"
}

export enum SettingsConnectorEnforcementEnum {
    ConnectorEnforcementUnspecified = "CONNECTOR_ENFORCEMENT_UNSPECIFIED",
    NotRequired = "NOT_REQUIRED",
    Required = "REQUIRED"
}

export enum SettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED",
    PdSsd = "PD_SSD",
    PdHdd = "PD_HDD",
    ObsoleteLocalSsd = "OBSOLETE_LOCAL_SSD"
}

export enum SettingsPricingPlanEnum {
    SqlPricingPlanUnspecified = "SQL_PRICING_PLAN_UNSPECIFIED",
    Package = "PACKAGE",
    PerUse = "PER_USE"
}

export enum SettingsReplicationTypeEnum {
    SqlReplicationTypeUnspecified = "SQL_REPLICATION_TYPE_UNSPECIFIED",
    Synchronous = "SYNCHRONOUS",
    Asynchronous = "ASYNCHRONOUS"
}


// Settings
/** 
 * Database instance settings.
**/
export class Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activationPolicy" })
  activationPolicy?: SettingsActivationPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=activeDirectoryConfig" })
  activeDirectoryConfig?: SqlActiveDirectoryConfig;

  @SpeakeasyMetadata({ data: "json, name=authorizedGaeApplications" })
  authorizedGaeApplications?: string[];

  @SpeakeasyMetadata({ data: "json, name=availabilityType" })
  availabilityType?: SettingsAvailabilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=backupConfiguration" })
  backupConfiguration?: BackupConfiguration;

  @SpeakeasyMetadata({ data: "json, name=collation" })
  collation?: string;

  @SpeakeasyMetadata({ data: "json, name=connectorEnforcement" })
  connectorEnforcement?: SettingsConnectorEnforcementEnum;

  @SpeakeasyMetadata({ data: "json, name=crashSafeReplicationEnabled" })
  crashSafeReplicationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskType" })
  dataDiskType?: SettingsDataDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=databaseFlags", elemType: DatabaseFlags })
  databaseFlags?: DatabaseFlags[];

  @SpeakeasyMetadata({ data: "json, name=databaseReplicationEnabled" })
  databaseReplicationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deletionProtectionEnabled" })
  deletionProtectionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=denyMaintenancePeriods", elemType: DenyMaintenancePeriod })
  denyMaintenancePeriods?: DenyMaintenancePeriod[];

  @SpeakeasyMetadata({ data: "json, name=insightsConfig" })
  insightsConfig?: InsightsConfig;

  @SpeakeasyMetadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: IpConfiguration;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=locationPreference" })
  locationPreference?: LocationPreference;

  @SpeakeasyMetadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=passwordValidationPolicy" })
  passwordValidationPolicy?: PasswordValidationPolicy;

  @SpeakeasyMetadata({ data: "json, name=pricingPlan" })
  pricingPlan?: SettingsPricingPlanEnum;

  @SpeakeasyMetadata({ data: "json, name=replicationType" })
  replicationType?: SettingsReplicationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=settingsVersion" })
  settingsVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlServerAuditConfig" })
  sqlServerAuditConfig?: SqlServerAuditConfig;

  @SpeakeasyMetadata({ data: "json, name=storageAutoResize" })
  storageAutoResize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=storageAutoResizeLimit" })
  storageAutoResizeLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: string;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
