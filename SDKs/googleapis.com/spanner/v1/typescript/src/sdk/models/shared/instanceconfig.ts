import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicaInfo } from "./replicainfo";
import { ReplicaInfo } from "./replicainfo";

export enum InstanceConfigConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    GoogleManaged = "GOOGLE_MANAGED"
,    UserManaged = "USER_MANAGED"
}

export enum InstanceConfigFreeInstanceAvailabilityEnum {
    FreeInstanceAvailabilityUnspecified = "FREE_INSTANCE_AVAILABILITY_UNSPECIFIED"
,    Available = "AVAILABLE"
,    Unsupported = "UNSUPPORTED"
,    Disabled = "DISABLED"
,    QuotaExceeded = "QUOTA_EXCEEDED"
}

export enum InstanceConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
}


// InstanceConfig
/** 
 * A possible configuration for a Cloud Spanner instance. Configurations define the geographic placement of nodes and their replication.
**/
export class InstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseConfig" })
  baseConfig?: string;

  @Metadata({ data: "json, name=configType" })
  configType?: InstanceConfigConfigTypeEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=freeInstanceAvailability" })
  freeInstanceAvailability?: InstanceConfigFreeInstanceAvailabilityEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=leaderOptions" })
  leaderOptions?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optionalReplicas", elemType: shared.ReplicaInfo })
  optionalReplicas?: ReplicaInfo[];

  @Metadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @Metadata({ data: "json, name=replicas", elemType: shared.ReplicaInfo })
  replicas?: ReplicaInfo[];

  @Metadata({ data: "json, name=state" })
  state?: InstanceConfigStateEnum;
}
