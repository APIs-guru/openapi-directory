import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAccessConfigInput } from "./runtimeaccessconfig";
import { RuntimeSoftwareConfigInput } from "./runtimesoftwareconfig";
import { VirtualMachineInput } from "./virtualmachine";
import { RuntimeAccessConfig } from "./runtimeaccessconfig";
import { RuntimeMetrics } from "./runtimemetrics";
import { RuntimeSoftwareConfig } from "./runtimesoftwareconfig";
import { VirtualMachine } from "./virtualmachine";


export enum RuntimeHealthStateEnum {
    HealthStateUnspecified = "HEALTH_STATE_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    AgentNotInstalled = "AGENT_NOT_INSTALLED",
    AgentNotRunning = "AGENT_NOT_RUNNING"
}

export enum RuntimeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Starting = "STARTING",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Deleting = "DELETING",
    Upgrading = "UPGRADING",
    Initializing = "INITIALIZING"
}


// RuntimeInput
/** 
 * The definition of a Runtime for a managed notebook instance.
**/
export class RuntimeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessConfig" })
  accessConfig?: RuntimeAccessConfigInput;

  @SpeakeasyMetadata({ data: "json, name=softwareConfig" })
  softwareConfig?: RuntimeSoftwareConfigInput;

  @SpeakeasyMetadata({ data: "json, name=virtualMachine" })
  virtualMachine?: VirtualMachineInput;
}


// Runtime
/** 
 * The definition of a Runtime for a managed notebook instance.
**/
export class Runtime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessConfig" })
  accessConfig?: RuntimeAccessConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=healthState" })
  healthState?: RuntimeHealthStateEnum;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: RuntimeMetrics;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=softwareConfig" })
  softwareConfig?: RuntimeSoftwareConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: RuntimeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualMachine" })
  virtualMachine?: VirtualMachine;
}
