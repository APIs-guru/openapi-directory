import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedDisk } from "./attacheddisk";
import { NetworkConfig } from "./networkconfig";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
import { ServiceAccount } from "./serviceaccount";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { Symptom } from "./symptom";


export enum NodeApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    V1Alpha1 = "V1_ALPHA1",
    V1 = "V1",
    V2Alpha1 = "V2_ALPHA1",
    V2 = "V2"
}

export enum NodeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Restarting = "RESTARTING",
    Reimaging = "REIMAGING",
    Deleting = "DELETING",
    Repairing = "REPAIRING",
    Stopped = "STOPPED",
    Stopping = "STOPPING",
    Starting = "STARTING",
    Preempted = "PREEMPTED",
    Terminated = "TERMINATED",
    Hiding = "HIDING",
    Hidden = "HIDDEN",
    Unhiding = "UNHIDING"
}

export enum NodeHealthEnum {
    HealthUnspecified = "HEALTH_UNSPECIFIED",
    Healthy = "HEALTHY",
    Timeout = "TIMEOUT",
    UnhealthyTensorflow = "UNHEALTHY_TENSORFLOW",
    UnhealthyMaintenance = "UNHEALTHY_MAINTENANCE"
}


// Node
/** 
 * A TPU instance.
**/
export class Node extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;

  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: NodeApiVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=cidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDisks", elemType: AttachedDisk })
  dataDisks?: AttachedDisk[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: NodeHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=healthDescription" })
  healthDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=networkEndpoints", elemType: NetworkEndpoint })
  networkEndpoints?: NetworkEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulingConfig" })
  schedulingConfig?: SchedulingConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: NodeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=symptoms", elemType: Symptom })
  symptoms?: Symptom[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


// NodeInput
/** 
 * A TPU instance.
**/
export class NodeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;

  @SpeakeasyMetadata({ data: "json, name=cidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDisks", elemType: AttachedDisk })
  dataDisks?: AttachedDisk[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: NodeHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkConfig" })
  networkConfig?: NetworkConfig;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulingConfig" })
  schedulingConfig?: SchedulingConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccount;

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
