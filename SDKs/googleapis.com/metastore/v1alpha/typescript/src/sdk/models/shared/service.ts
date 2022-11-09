import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EncryptionConfig } from "./encryptionconfig";
import { HiveMetastoreConfig } from "./hivemetastoreconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MetadataIntegration } from "./metadataintegration";
import { MetadataManagementActivity } from "./metadatamanagementactivity";
import { NetworkConfig } from "./networkconfig";

export enum ServiceDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED"
,    Mysql = "MYSQL"
,    Spanner = "SPANNER"
}

export enum ServiceReleaseChannelEnum {
    ReleaseChannelUnspecified = "RELEASE_CHANNEL_UNSPECIFIED"
,    Canary = "CANARY"
,    Stable = "STABLE"
}

export enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Suspending = "SUSPENDING"
,    Suspended = "SUSPENDED"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Error = "ERROR"
}

export enum ServiceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    Developer = "DEVELOPER"
,    Enterprise = "ENTERPRISE"
}


// Service
/** 
 * A managed metastore service that serves metadata queries.
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactGcsUri" })
  artifactGcsUri?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=databaseType" })
  databaseType?: ServiceDatabaseTypeEnum;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @Metadata({ data: "json, name=hiveMetastoreConfig" })
  hiveMetastoreConfig?: HiveMetastoreConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @Metadata({ data: "json, name=metadataIntegration" })
  metadataIntegration?: MetadataIntegration;

  @Metadata({ data: "json, name=metadataManagementActivity" })
  metadataManagementActivity?: MetadataManagementActivity;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=releaseChannel" })
  releaseChannel?: ServiceReleaseChannelEnum;

  @Metadata({ data: "json, name=state" })
  state?: ServiceStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=tier" })
  tier?: ServiceTierEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
