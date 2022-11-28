import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GpuSharingConfigGpuSharingStrategyEnum {
    GpuSharingStrategyUnspecified = "GPU_SHARING_STRATEGY_UNSPECIFIED",
    TimeSharing = "TIME_SHARING"
}
/**
 * GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
**/
export declare class GpuSharingConfig extends SpeakeasyBase {
    gpuSharingStrategy?: GpuSharingConfigGpuSharingStrategyEnum;
    maxSharedClientsPerGpu?: string;
}
