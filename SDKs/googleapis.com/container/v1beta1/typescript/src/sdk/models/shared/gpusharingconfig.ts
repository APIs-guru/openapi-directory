import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GpuSharingConfigGpuSharingStrategyEnum {
    GpuSharingStrategyUnspecified = "GPU_SHARING_STRATEGY_UNSPECIFIED"
,    TimeSharing = "TIME_SHARING"
}


// GpuSharingConfig
/** 
 * GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
**/
export class GpuSharingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gpuSharingStrategy" })
  gpuSharingStrategy?: GpuSharingConfigGpuSharingStrategyEnum;

  @Metadata({ data: "json, name=maxSharedClientsPerGpu" })
  maxSharedClientsPerGpu?: string;
}
