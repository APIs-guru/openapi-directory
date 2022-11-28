import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AcceleratorConfigTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED",
    NvidiaTeslaK80 = "NVIDIA_TESLA_K80",
    NvidiaTeslaP100 = "NVIDIA_TESLA_P100",
    NvidiaTeslaV100 = "NVIDIA_TESLA_V100",
    NvidiaTeslaP4 = "NVIDIA_TESLA_P4",
    NvidiaTeslaT4 = "NVIDIA_TESLA_T4",
    NvidiaTeslaA100 = "NVIDIA_TESLA_A100",
    NvidiaTeslaT4Vws = "NVIDIA_TESLA_T4_VWS",
    NvidiaTeslaP100Vws = "NVIDIA_TESLA_P100_VWS",
    NvidiaTeslaP4Vws = "NVIDIA_TESLA_P4_VWS",
    TpuV2 = "TPU_V2",
    TpuV3 = "TPU_V3"
}
/**
 * Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](/compute/docs/gpus/#gpus-list) to find a valid combination. TPUs are not supported.
**/
export declare class AcceleratorConfig extends SpeakeasyBase {
    coreCount?: string;
    type?: AcceleratorConfigTypeEnum;
}
