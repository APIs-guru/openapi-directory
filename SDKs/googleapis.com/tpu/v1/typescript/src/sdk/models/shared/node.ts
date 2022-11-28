import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
import { Symptom } from "./symptom";


export enum NodeApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    V1Alpha1 = "V1_ALPHA1",
    V1 = "V1",
    V2Alpha1 = "V2_ALPHA1"
}

export enum NodeHealthEnum {
    HealthUnspecified = "HEALTH_UNSPECIFIED",
    Healthy = "HEALTHY",
    DeprecatedUnhealthy = "DEPRECATED_UNHEALTHY",
    Timeout = "TIMEOUT",
    UnhealthyTensorflow = "UNHEALTHY_TENSORFLOW",
    UnhealthyMaintenance = "UNHEALTHY_MAINTENANCE"
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

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: NodeHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=healthDescription" })
  healthDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkEndpoints", elemType: NetworkEndpoint })
  networkEndpoints?: NetworkEndpoint[];

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulingConfig" })
  schedulingConfig?: SchedulingConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: NodeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=symptoms", elemType: Symptom })
  symptoms?: Symptom[];

  @SpeakeasyMetadata({ data: "json, name=tensorflowVersion" })
  tensorflowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=useServiceNetworking" })
  useServiceNetworking?: boolean;
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

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: NodeHealthEnum;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulingConfig" })
  schedulingConfig?: SchedulingConfig;

  @SpeakeasyMetadata({ data: "json, name=tensorflowVersion" })
  tensorflowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=useServiceNetworking" })
  useServiceNetworking?: boolean;
}
