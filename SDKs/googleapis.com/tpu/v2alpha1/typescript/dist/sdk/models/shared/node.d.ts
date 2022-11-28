import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedDisk } from "./attacheddisk";
import { NetworkConfig } from "./networkconfig";
import { NetworkEndpoint } from "./networkendpoint";
import { SchedulingConfig } from "./schedulingconfig";
import { ServiceAccount } from "./serviceaccount";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { Symptom } from "./symptom";
export declare enum NodeApiVersionEnum {
    ApiVersionUnspecified = "API_VERSION_UNSPECIFIED",
    V1Alpha1 = "V1_ALPHA1",
    V1 = "V1",
    V2Alpha1 = "V2_ALPHA1"
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
export declare enum NodeHealthEnum {
    HealthUnspecified = "HEALTH_UNSPECIFIED",
    Healthy = "HEALTHY",
    Timeout = "TIMEOUT",
    UnhealthyTensorflow = "UNHEALTHY_TENSORFLOW",
    UnhealthyMaintenance = "UNHEALTHY_MAINTENANCE"
}
/**
 * A TPU instance.
**/
export declare class Node extends SpeakeasyBase {
    acceleratorType?: string;
    apiVersion?: NodeApiVersionEnum;
    cidrBlock?: string;
    createTime?: string;
    dataDisks?: AttachedDisk[];
    description?: string;
    health?: NodeHealthEnum;
    healthDescription?: string;
    id?: string;
    labels?: Map<string, string>;
    metadata?: Map<string, string>;
    name?: string;
    networkConfig?: NetworkConfig;
    networkEndpoints?: NetworkEndpoint[];
    queuedResource?: string;
    runtimeVersion?: string;
    schedulingConfig?: SchedulingConfig;
    serviceAccount?: ServiceAccount;
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    state?: NodeStateEnum;
    symptoms?: Symptom[];
    tags?: string[];
}
/**
 * A TPU instance.
**/
export declare class NodeInput extends SpeakeasyBase {
    acceleratorType?: string;
    cidrBlock?: string;
    dataDisks?: AttachedDisk[];
    description?: string;
    health?: NodeHealthEnum;
    labels?: Map<string, string>;
    metadata?: Map<string, string>;
    networkConfig?: NetworkConfig;
    runtimeVersion?: string;
    schedulingConfig?: SchedulingConfig;
    serviceAccount?: ServiceAccount;
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    tags?: string[];
}
