import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GpuSharingConfigGpuSharingStrategyEnum {
    GpuSharingStrategyUnspecified = "GPU_SHARING_STRATEGY_UNSPECIFIED",
    TimeSharing = "TIME_SHARING"
}


// GpuSharingConfig
/** 
 * GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
**/
export class GpuSharingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gpuSharingStrategy" })
  gpuSharingStrategy?: GpuSharingConfigGpuSharingStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=maxSharedClientsPerGpu" })
  maxSharedClientsPerGpu?: string;
}
