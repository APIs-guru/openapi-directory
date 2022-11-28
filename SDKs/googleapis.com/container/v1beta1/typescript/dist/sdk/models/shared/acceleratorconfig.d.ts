import { SpeakeasyBase } from "../../../internal/utils";
import { GpuSharingConfig } from "./gpusharingconfig";
/**
 * AcceleratorConfig represents a Hardware Accelerator request.
**/
export declare class AcceleratorConfig extends SpeakeasyBase {
    acceleratorCount?: string;
    acceleratorType?: string;
    gpuPartitionSize?: string;
    gpuSharingConfig?: GpuSharingConfig;
    maxTimeSharedClientsPerGpu?: string;
}
