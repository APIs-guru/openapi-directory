import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SchedulerAcceleratorConfigTypeEnum {
    SchedulerAcceleratorTypeUnspecified = "SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED"
,    NvidiaTeslaK80 = "NVIDIA_TESLA_K80"
,    NvidiaTeslaP100 = "NVIDIA_TESLA_P100"
,    NvidiaTeslaV100 = "NVIDIA_TESLA_V100"
,    NvidiaTeslaP4 = "NVIDIA_TESLA_P4"
,    NvidiaTeslaT4 = "NVIDIA_TESLA_T4"
,    NvidiaTeslaA100 = "NVIDIA_TESLA_A100"
,    TpuV2 = "TPU_V2"
,    TpuV3 = "TPU_V3"
}


// SchedulerAcceleratorConfig
/** 
 * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported.
**/
export class SchedulerAcceleratorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=coreCount" })
  coreCount?: string;

  @Metadata({ data: "json, name=type" })
  type?: SchedulerAcceleratorConfigTypeEnum;
}
