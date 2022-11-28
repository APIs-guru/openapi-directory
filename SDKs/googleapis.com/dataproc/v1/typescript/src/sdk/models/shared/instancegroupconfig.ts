import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { DiskConfig } from "./diskconfig";
import { InstanceReference } from "./instancereference";
import { ManagedGroupConfig } from "./managedgroupconfig";


export enum InstanceGroupConfigPreemptibilityEnum {
    PreemptibilityUnspecified = "PREEMPTIBILITY_UNSPECIFIED",
    NonPreemptible = "NON_PREEMPTIBLE",
    Preemptible = "PREEMPTIBLE",
    Spot = "SPOT"
}


// InstanceGroupConfigInput
/** 
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
export class InstanceGroupConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: AcceleratorConfig })
  accelerators?: AcceleratorConfig[];

  @SpeakeasyMetadata({ data: "json, name=diskConfig" })
  diskConfig?: DiskConfig;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=machineTypeUri" })
  machineTypeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=numInstances" })
  numInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=preemptibility" })
  preemptibility?: InstanceGroupConfigPreemptibilityEnum;
}


// InstanceGroupConfig
/** 
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
export class InstanceGroupConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: AcceleratorConfig })
  accelerators?: AcceleratorConfig[];

  @SpeakeasyMetadata({ data: "json, name=diskConfig" })
  diskConfig?: DiskConfig;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=instanceReferences", elemType: InstanceReference })
  instanceReferences?: InstanceReference[];

  @SpeakeasyMetadata({ data: "json, name=isPreemptible" })
  isPreemptible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=machineTypeUri" })
  machineTypeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=managedGroupConfig" })
  managedGroupConfig?: ManagedGroupConfig;

  @SpeakeasyMetadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=numInstances" })
  numInstances?: number;

  @SpeakeasyMetadata({ data: "json, name=preemptibility" })
  preemptibility?: InstanceGroupConfigPreemptibilityEnum;
}
