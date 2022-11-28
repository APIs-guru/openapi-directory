import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolAcceleratorConfig } from "./gkenodepoolacceleratorconfig";



// GkeNodeConfig
/** 
 * Parameters that describe cluster nodes.
**/
export class GkeNodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accelerators", elemType: GkeNodePoolAcceleratorConfig })
  accelerators?: GkeNodePoolAcceleratorConfig[];

  @SpeakeasyMetadata({ data: "json, name=bootDiskKmsKey" })
  bootDiskKmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=localSsdCount" })
  localSsdCount?: number;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=minCpuPlatform" })
  minCpuPlatform?: string;

  @SpeakeasyMetadata({ data: "json, name=preemptible" })
  preemptible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=spot" })
  spot?: boolean;
}
