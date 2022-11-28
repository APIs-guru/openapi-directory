import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
**/
export declare class GkeNodePoolAcceleratorConfig extends SpeakeasyBase {
    acceleratorCount?: string;
    acceleratorType?: string;
    gpuPartitionSize?: string;
}
