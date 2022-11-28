import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
import { Symptom } from "./symptom";
export declare enum NodeApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    V1Alpha1 = "V1_ALPHA1",
    V1 = "V1",
    V2Alpha1 = "V2_ALPHA1"
}
export declare enum NodeHealthEnum {
    HealthUnspecified = "HEALTH_UNSPECIFIED",
    Healthy = "HEALTHY",
    DeprecatedUnhealthy = "DEPRECATED_UNHEALTHY",
    Timeout = "TIMEOUT",
    UnhealthyTensorflow = "UNHEALTHY_TENSORFLOW",
    UnhealthyMaintenance = "UNHEALTHY_MAINTENANCE"
}
export declare enum NodeStateEnum {
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
/**
 * A TPU instance.
**/
export declare class Node extends SpeakeasyBase {
    acceleratorType?: string;
    apiVersion?: NodeApiVersionEnum;
    cidrBlock?: string;
    createTime?: string;
    description?: string;
    health?: NodeHealthEnum;
    healthDescription?: string;
    ipAddress?: string;
    labels?: Map<string, string>;
    name?: string;
    network?: string;
    networkEndpoints?: NetworkEndpoint[];
    port?: string;
    schedulingConfig?: SchedulingConfig;
    serviceAccount?: string;
    state?: NodeStateEnum;
    symptoms?: Symptom[];
    tensorflowVersion?: string;
    useServiceNetworking?: boolean;
}
/**
 * A TPU instance.
**/
export declare class NodeInput extends SpeakeasyBase {
    acceleratorType?: string;
    cidrBlock?: string;
    description?: string;
    health?: NodeHealthEnum;
    ipAddress?: string;
    labels?: Map<string, string>;
    network?: string;
    port?: string;
    schedulingConfig?: SchedulingConfig;
    tensorflowVersion?: string;
    useServiceNetworking?: boolean;
}
