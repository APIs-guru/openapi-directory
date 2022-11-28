import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { DiskConfig } from "./diskconfig";
import { InstanceReference } from "./instancereference";
import { ManagedGroupConfig } from "./managedgroupconfig";
export declare enum InstanceGroupConfigPreemptibilityEnum {
    PreemptibilityUnspecified = "PREEMPTIBILITY_UNSPECIFIED",
    NonPreemptible = "NON_PREEMPTIBLE",
    Preemptible = "PREEMPTIBLE",
    Spot = "SPOT"
}
/**
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
export declare class InstanceGroupConfigInput extends SpeakeasyBase {
    accelerators?: AcceleratorConfig[];
    diskConfig?: DiskConfig;
    imageUri?: string;
    machineTypeUri?: string;
    minCpuPlatform?: string;
    numInstances?: number;
    preemptibility?: InstanceGroupConfigPreemptibilityEnum;
}
/**
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
export declare class InstanceGroupConfig extends SpeakeasyBase {
    accelerators?: AcceleratorConfig[];
    diskConfig?: DiskConfig;
    imageUri?: string;
    instanceNames?: string[];
    instanceReferences?: InstanceReference[];
    isPreemptible?: boolean;
    machineTypeUri?: string;
    managedGroupConfig?: ManagedGroupConfig;
    minCpuPlatform?: string;
    numInstances?: number;
    preemptibility?: InstanceGroupConfigPreemptibilityEnum;
}
