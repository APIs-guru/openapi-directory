import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
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
,    DeprecatedUnhealthy = "DEPRECATED_UNHEALTHY"
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

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=health" })
  health?: NodeHealthEnum;

  @Metadata({ data: "json, name=healthDescription" })
  healthDescription?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=networkEndpoints", elemType: shared.NetworkEndpoint })
  networkEndpoints?: NetworkEndpoint[];

  @Metadata({ data: "json, name=port" })
  port?: string;

  @Metadata({ data: "json, name=schedulingConfig" })
  schedulingConfig?: SchedulingConfig;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=state" })
  state?: NodeStateEnum;

  @Metadata({ data: "json, name=symptoms", elemType: shared.Symptom })
  symptoms?: Symptom[];

  @Metadata({ data: "json, name=tensorflowVersion" })
  tensorflowVersion?: string;

  @Metadata({ data: "json, name=useServiceNetworking" })
  useServiceNetworking?: boolean;
}
