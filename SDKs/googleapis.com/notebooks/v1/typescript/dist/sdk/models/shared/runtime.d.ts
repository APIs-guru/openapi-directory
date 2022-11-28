import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAccessConfigInput } from "./runtimeaccessconfig";
import { RuntimeSoftwareConfigInput } from "./runtimesoftwareconfig";
import { VirtualMachineInput } from "./virtualmachine";
import { RuntimeAccessConfig } from "./runtimeaccessconfig";
import { RuntimeMetrics } from "./runtimemetrics";
import { RuntimeSoftwareConfig } from "./runtimesoftwareconfig";
import { VirtualMachine } from "./virtualmachine";
export declare enum RuntimeHealthStateEnum {
    HealthStateUnspecified = "HEALTH_STATE_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    AgentNotInstalled = "AGENT_NOT_INSTALLED",
    AgentNotRunning = "AGENT_NOT_RUNNING"
}
export declare enum RuntimeStateEnum {
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
/**
 * The definition of a Runtime for a managed notebook instance.
**/
export declare class RuntimeInput extends SpeakeasyBase {
    accessConfig?: RuntimeAccessConfigInput;
    softwareConfig?: RuntimeSoftwareConfigInput;
    virtualMachine?: VirtualMachineInput;
}
/**
 * The definition of a Runtime for a managed notebook instance.
**/
export declare class Runtime extends SpeakeasyBase {
    accessConfig?: RuntimeAccessConfig;
    createTime?: string;
    healthState?: RuntimeHealthStateEnum;
    metrics?: RuntimeMetrics;
    name?: string;
    softwareConfig?: RuntimeSoftwareConfig;
    state?: RuntimeStateEnum;
    updateTime?: string;
    virtualMachine?: VirtualMachine;
}
