import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuntimeAccessConfig } from "./runtimeaccessconfig";
import { RuntimeMetrics } from "./runtimemetrics";
import { RuntimeSoftwareConfig } from "./runtimesoftwareconfig";
import { VirtualMachine } from "./virtualmachine";

export enum RuntimeHealthStateEnum {
    HealthStateUnspecified = "HEALTH_STATE_UNSPECIFIED"
,    Healthy = "HEALTHY"
,    Unhealthy = "UNHEALTHY"
,    AgentNotInstalled = "AGENT_NOT_INSTALLED"
,    AgentNotRunning = "AGENT_NOT_RUNNING"
}

export enum RuntimeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Starting = "STARTING"
,    Provisioning = "PROVISIONING"
,    Active = "ACTIVE"
,    Stopping = "STOPPING"
,    Stopped = "STOPPED"
,    Deleting = "DELETING"
,    Upgrading = "UPGRADING"
,    Initializing = "INITIALIZING"
}


// Runtime
/** 
 * The definition of a Runtime for a managed notebook instance.
**/
export class Runtime extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessConfig" })
  accessConfig?: RuntimeAccessConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=healthState" })
  healthState?: RuntimeHealthStateEnum;

  @Metadata({ data: "json, name=metrics" })
  metrics?: RuntimeMetrics;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=softwareConfig" })
  softwareConfig?: RuntimeSoftwareConfig;

  @Metadata({ data: "json, name=state" })
  state?: RuntimeStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=virtualMachine" })
  virtualMachine?: VirtualMachine;
}
