import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachedDisk } from "./attacheddisk";
import { NetworkConfig } from "./networkconfig";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
import { ServiceAccount } from "./serviceaccount";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { Symptom } from "./symptom";

export enum NodeApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED"
,    V1Alpha1 = "V1_ALPHA1"
,    V1 = "V1"
,    V2Alpha1 = "V2_ALPHA1"
}

export enum NodeHealthEnum {
    HealthUnspecified = "HEALTH_UNSPECIFIED"
,    Healthy = "HEALTHY"
,    Timeout = "TIMEOUT"
,    UnhealthyTensorflow = "UNHEALTHY_TENSORFLOW"
,    UnhealthyMaintenance = "UNHEALTHY_MAINTENANCE"
}

export enum NodeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Restarting = "RESTARTING"
,    Reimaging = "REIMAGING"
,    Deleting = "DELETING"
,    Repairing = "REPAIRING"
,    Stopped = "STOPPED"
,    Stopping = "STOPPING"
,    Starting = "STARTING"
,    Preempted = "PREEMPTED"
,    Terminated = "TERMINATED"
,    Hiding = "HIDING"
,    Hidden = "HIDDEN"
,    Unhiding = "UNHIDING"
}


// Node
/** 
 * A TPU instance.
**/
export class Node extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;

  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: NodeApiVersionEnum;

  @Metadata({ data: "json, name=cidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataDisks", elemType: shared.AttachedDisk })
  dataDisks?: AttachedDisk[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=health" })
  health?: NodeHealthEnum;

  @Metadata({ data: "json, name=healthDescription" })
  healthDescription?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @Metadata({ data: "json, name=networkEndpoints", elemType: shared.NetworkEndpoint })
  networkEndpoints?: NetworkEndpoint[];

  @Metadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @Metadata({ data: "json, name=schedulingConfig" })
  schedulingConfig?: SchedulingConfig;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;

  @Metadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @Metadata({ data: "json, name=state" })
  state?: NodeStateEnum;

  @Metadata({ data: "json, name=symptoms", elemType: shared.Symptom })
  symptoms?: Symptom[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}
