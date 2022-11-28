import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
import { HiveMetastoreConfig } from "./hivemetastoreconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MetadataIntegration } from "./metadataintegration";
import { MetadataManagementActivity } from "./metadatamanagementactivity";
import { NetworkConfig } from "./networkconfig";
import { TelemetryConfig } from "./telemetryconfig";
import { HiveMetastoreConfigInput } from "./hivemetastoreconfig";
import { NetworkConfigInput } from "./networkconfig";


export enum ServiceDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Spanner = "SPANNER"
}

export enum ServiceReleaseChannelEnum {
    ReleaseChannelUnspecified = "RELEASE_CHANNEL_UNSPECIFIED",
    Canary = "CANARY",
    Stable = "STABLE"
}

export enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}

export enum ServiceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Developer = "DEVELOPER",
    Enterprise = "ENTERPRISE"
}


// Service
/** 
 * A managed metastore service that serves metadata queries.
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactGcsUri" })
  artifactGcsUri?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=databaseType" })
  databaseType?: ServiceDatabaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @SpeakeasyMetadata({ data: "json, name=hiveMetastoreConfig" })
  hiveMetastoreConfig?: HiveMetastoreConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=metadataIntegration" })
  metadataIntegration?: MetadataIntegration;

  @SpeakeasyMetadata({ data: "json, name=metadataManagementActivity" })
  metadataManagementActivity?: MetadataManagementActivity;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseChannel" })
  releaseChannel?: ServiceReleaseChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ServiceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=telemetryConfig" })
  telemetryConfig?: TelemetryConfig;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: ServiceTierEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ServiceInput
/** 
 * A managed metastore service that serves metadata queries.
**/
export class ServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseType" })
  databaseType?: ServiceDatabaseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=hiveMetastoreConfig" })
  hiveMetastoreConfig?: HiveMetastoreConfigInput;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=metadataIntegration" })
  metadataIntegration?: MetadataIntegration;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfigInput;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseChannel" })
  releaseChannel?: ServiceReleaseChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=telemetryConfig" })
  telemetryConfig?: TelemetryConfig;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: ServiceTierEnum;
}
