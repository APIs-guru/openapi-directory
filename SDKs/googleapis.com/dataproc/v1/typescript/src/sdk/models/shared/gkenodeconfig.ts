import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GkeNodePoolAcceleratorConfig } from "./gkenodepoolacceleratorconfig";


// GkeNodeConfig
/** 
 * Parameters that describe cluster nodes.
**/
export class GkeNodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accelerators", elemType: shared.GkeNodePoolAcceleratorConfig })
  accelerators?: GkeNodePoolAcceleratorConfig[];

  @Metadata({ data: "json, name=bootDiskKmsKey" })
  bootDiskKmsKey?: string;

  @Metadata({ data: "json, name=localSsdCount" })
  localSsdCount?: number;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @Metadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @Metadata({ data: "json, name=spot" })
  spot?: boolean;
}
