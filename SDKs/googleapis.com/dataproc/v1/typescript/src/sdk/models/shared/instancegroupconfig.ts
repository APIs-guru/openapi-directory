import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcceleratorConfig } from "./acceleratorconfig";
import { DiskConfig } from "./diskconfig";
import { InstanceReference } from "./instancereference";
import { ManagedGroupConfig } from "./managedgroupconfig";

export enum InstanceGroupConfigPreemptibilityEnum {
    PreemptibilityUnspecified = "PREEMPTIBILITY_UNSPECIFIED"
,    NonPreemptible = "NON_PREEMPTIBLE"
,    Preemptible = "PREEMPTIBLE"
,    Spot = "SPOT"
}


// InstanceGroupConfig
/** 
 * The config settings for Compute Engine resources in an instance group, such as a master or worker group.
**/
export class InstanceGroupConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accelerators", elemType: shared.AcceleratorConfig })
  accelerators?: AcceleratorConfig[];

  @Metadata({ data: "json, name=diskConfig" })
  diskConfig?: DiskConfig;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=instanceNames" })
  instanceNames?: string[];

  @Metadata({ data: "json, name=instanceReferences", elemType: shared.InstanceReference })
  instanceReferences?: InstanceReference[];

  @Metadata({ data: "json, name=isPreemptible" })
  isPreemptible?: boolean;

  @Metadata({ data: "json, name=machineTypeUri" })
  machineTypeUri?: string;

  @Metadata({ data: "json, name=managedGroupConfig" })
  managedGroupConfig?: ManagedGroupConfig;

  @Metadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @Metadata({ data: "json, name=numInstances" })
  numInstances?: number;

  @Metadata({ data: "json, name=preemptibility" })
  preemptibility?: InstanceGroupConfigPreemptibilityEnum;
}
