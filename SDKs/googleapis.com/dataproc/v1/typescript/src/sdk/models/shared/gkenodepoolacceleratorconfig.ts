import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GkeNodePoolAcceleratorConfig
/** 
 * A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
**/
export class GkeNodePoolAcceleratorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorCount" })
  acceleratorCount?: string;

  @Metadata({ data: "json, name=acceleratorType" })
  acceleratorType?: string;

  @Metadata({ data: "json, name=gpuPartitionSize" })
  gpuPartitionSize?: string;
}
