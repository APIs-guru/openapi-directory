import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfig } from "./encryptionconfig";
import { HiveMetastoreConfig } from "./hivemetastoreconfig";
import { MaintenanceWindow } from "./maintenancewindow";
import { MetadataIntegration } from "./metadataintegration";
import { MetadataManagementActivity } from "./metadatamanagementactivity";
import { NetworkConfig } from "./networkconfig";
import { TelemetryConfig } from "./telemetryconfig";
import { HiveMetastoreConfigInput } from "./hivemetastoreconfig";
import { NetworkConfigInput } from "./networkconfig";
export declare enum ServiceDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Spanner = "SPANNER"
}
export declare enum ServiceReleaseChannelEnum {
    ReleaseChannelUnspecified = "RELEASE_CHANNEL_UNSPECIFIED",
    Canary = "CANARY",
    Stable = "STABLE"
}
export declare enum ServiceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Error = "ERROR"
}
export declare enum ServiceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Developer = "DEVELOPER",
    Enterprise = "ENTERPRISE"
}
/**
 * A managed metastore service that serves metadata queries.
**/
export declare class Service extends SpeakeasyBase {
    artifactGcsUri?: string;
    createTime?: string;
    databaseType?: ServiceDatabaseTypeEnum;
    encryptionConfig?: EncryptionConfig;
    endpointUri?: string;
    hiveMetastoreConfig?: HiveMetastoreConfig;
    labels?: Map<string, string>;
    maintenanceWindow?: MaintenanceWindow;
    metadataIntegration?: MetadataIntegration;
    metadataManagementActivity?: MetadataManagementActivity;
    name?: string;
    network?: string;
    networkConfig?: NetworkConfig;
    port?: number;
    releaseChannel?: ServiceReleaseChannelEnum;
    state?: ServiceStateEnum;
    stateMessage?: string;
    telemetryConfig?: TelemetryConfig;
    tier?: ServiceTierEnum;
    uid?: string;
    updateTime?: string;
}
/**
 * A managed metastore service that serves metadata queries.
**/
export declare class ServiceInput extends SpeakeasyBase {
    databaseType?: ServiceDatabaseTypeEnum;
    encryptionConfig?: EncryptionConfig;
    hiveMetastoreConfig?: HiveMetastoreConfigInput;
    labels?: Map<string, string>;
    maintenanceWindow?: MaintenanceWindow;
    metadataIntegration?: MetadataIntegration;
    name?: string;
    network?: string;
    networkConfig?: NetworkConfigInput;
    port?: number;
    releaseChannel?: ServiceReleaseChannelEnum;
    telemetryConfig?: TelemetryConfig;
    tier?: ServiceTierEnum;
}
