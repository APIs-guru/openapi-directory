import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
    SqlActivationPolicyUnspecified = "SQL_ACTIVATION_POLICY_UNSPECIFIED"
,    Always = "ALWAYS"
,    Never = "NEVER"
,    OnDemand = "ON_DEMAND"
}

export enum SettingsAvailabilityTypeEnum {
    SqlAvailabilityTypeUnspecified = "SQL_AVAILABILITY_TYPE_UNSPECIFIED"
,    Zonal = "ZONAL"
,    Regional = "REGIONAL"
}

export enum SettingsConnectorEnforcementEnum {
    ConnectorEnforcementUnspecified = "CONNECTOR_ENFORCEMENT_UNSPECIFIED"
,    NotRequired = "NOT_REQUIRED"
,    Required = "REQUIRED"
}

export enum SettingsDataDiskTypeEnum {
    SqlDataDiskTypeUnspecified = "SQL_DATA_DISK_TYPE_UNSPECIFIED"
,    PdSsd = "PD_SSD"
,    PdHdd = "PD_HDD"
,    ObsoleteLocalSsd = "OBSOLETE_LOCAL_SSD"
}

export enum SettingsPricingPlanEnum {
    SqlPricingPlanUnspecified = "SQL_PRICING_PLAN_UNSPECIFIED"
,    Package = "PACKAGE"
,    PerUse = "PER_USE"
}

export enum SettingsReplicationTypeEnum {
    SqlReplicationTypeUnspecified = "SQL_REPLICATION_TYPE_UNSPECIFIED"
,    Synchronous = "SYNCHRONOUS"
,    Asynchronous = "ASYNCHRONOUS"
}


// Settings
/** 
 * Database instance settings.
**/
export class Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=activationPolicy" })
  activationPolicy?: SettingsActivationPolicyEnum;

  @Metadata({ data: "json, name=activeDirectoryConfig" })
  activeDirectoryConfig?: SqlActiveDirectoryConfig;

  @Metadata({ data: "json, name=authorizedGaeApplications" })
  authorizedGaeApplications?: string[];

  @Metadata({ data: "json, name=availabilityType" })
  availabilityType?: SettingsAvailabilityTypeEnum;

  @Metadata({ data: "json, name=backupConfiguration" })
  backupConfiguration?: BackupConfiguration;

  @Metadata({ data: "json, name=collation" })
  collation?: string;

  @Metadata({ data: "json, name=connectorEnforcement" })
  connectorEnforcement?: SettingsConnectorEnforcementEnum;

  @Metadata({ data: "json, name=crashSafeReplicationEnabled" })
  crashSafeReplicationEnabled?: boolean;

  @Metadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @Metadata({ data: "json, name=dataDiskType" })
  dataDiskType?: SettingsDataDiskTypeEnum;

  @Metadata({ data: "json, name=databaseFlags", elemType: shared.DatabaseFlags })
  databaseFlags?: DatabaseFlags[];

  @Metadata({ data: "json, name=databaseReplicationEnabled" })
  databaseReplicationEnabled?: boolean;

  @Metadata({ data: "json, name=deletionProtectionEnabled" })
  deletionProtectionEnabled?: boolean;

  @Metadata({ data: "json, name=denyMaintenancePeriods", elemType: shared.DenyMaintenancePeriod })
  denyMaintenancePeriods?: DenyMaintenancePeriod[];

  @Metadata({ data: "json, name=insightsConfig" })
  insightsConfig?: InsightsConfig;

  @Metadata({ data: "json, name=ipConfiguration" })
  ipConfiguration?: IpConfiguration;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=locationPreference" })
  locationPreference?: LocationPreference;

  @Metadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @Metadata({ data: "json, name=passwordValidationPolicy" })
  passwordValidationPolicy?: PasswordValidationPolicy;

  @Metadata({ data: "json, name=pricingPlan" })
  pricingPlan?: SettingsPricingPlanEnum;

  @Metadata({ data: "json, name=replicationType" })
  replicationType?: SettingsReplicationTypeEnum;

  @Metadata({ data: "json, name=settingsVersion" })
  settingsVersion?: string;

  @Metadata({ data: "json, name=sqlServerAuditConfig" })
  sqlServerAuditConfig?: SqlServerAuditConfig;

  @Metadata({ data: "json, name=storageAutoResize" })
  storageAutoResize?: boolean;

  @Metadata({ data: "json, name=storageAutoResizeLimit" })
  storageAutoResizeLimit?: string;

  @Metadata({ data: "json, name=tier" })
  tier?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
