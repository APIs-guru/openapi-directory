import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GkeNodePoolAcceleratorConfig
/** 
 * A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
**/
export class GkeNodePoolAcceleratorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @SpeakeasyMetadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;

  @SpeakeasyMetadata({ data: "json, name=gpuPartitionSize" })
  gpuPartitionSize?: string;
}
