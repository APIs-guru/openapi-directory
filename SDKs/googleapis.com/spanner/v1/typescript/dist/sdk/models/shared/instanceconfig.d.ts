import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicaInfo } from "./replicainfo";
export declare enum InstanceConfigConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GoogleManaged = "GOOGLE_MANAGED",
    UserManaged = "USER_MANAGED"
}
export declare enum InstanceConfigFreeInstanceAvailabilityEnum {
    FreeInstanceAvailabilityUnspecified = "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
    Available = "AVAILABLE",
    Unsupported = "UNSUPPORTED",
    Disabled = "DISABLED",
    QuotaExceeded = "QUOTA_EXCEEDED"
}
export declare enum InstanceConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}
/**
 * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
**/
export declare class InstanceConfig extends SpeakeasyBase {
    baseConfig?: string;
    configType?: InstanceConfigConfigTypeEnum;
    displayName?: string;
    etag?: string;
    freeInstanceAvailability?: InstanceConfigFreeInstanceAvailabilityEnum;
    labels?: Map<string, string>;
    leaderOptions?: string[];
    name?: string;
    optionalReplicas?: ReplicaInfo[];
    reconciling?: boolean;
    replicas?: ReplicaInfo[];
    state?: InstanceConfigStateEnum;
}
/**
 * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
**/
export declare class InstanceConfigInput extends SpeakeasyBase {
    baseConfig?: string;
    displayName?: string;
    etag?: string;
    labels?: Map<string, string>;
    leaderOptions?: string[];
    name?: string;
    replicas?: ReplicaInfo[];
}
