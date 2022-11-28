import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicaInfo } from "./replicainfo";


export enum InstanceConfigConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GoogleManaged = "GOOGLE_MANAGED",
    UserManaged = "USER_MANAGED"
}

export enum InstanceConfigFreeInstanceAvailabilityEnum {
    FreeInstanceAvailabilityUnspecified = "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED",
    Available = "AVAILABLE",
    Unsupported = "UNSUPPORTED",
    Disabled = "DISABLED",
    QuotaExceeded = "QUOTA_EXCEEDED"
}

export enum InstanceConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY"
}


// InstanceConfig
/** 
 * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
**/
export class InstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseConfig" })
  baseConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=configType" })
  configType?: InstanceConfigConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=freeInstanceAvailability" })
  freeInstanceAvailability?: InstanceConfigFreeInstanceAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=leaderOptions" })
  leaderOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optionalReplicas", elemType: ReplicaInfo })
  optionalReplicas?: ReplicaInfo[];

  @SpeakeasyMetadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=replicas", elemType: ReplicaInfo })
  replicas?: ReplicaInfo[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceConfigStateEnum;
}


// InstanceConfigInput
/** 
 * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
**/
export class InstanceConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseConfig" })
  baseConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=leaderOptions" })
  leaderOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=replicas", elemType: ReplicaInfo })
  replicas?: ReplicaInfo[];
}
