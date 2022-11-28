import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RuntimeAcceleratorConfigTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED",
    NvidiaTeslaK80 = "NVIDIA_TESLA_K80",
    NvidiaTeslaP100 = "NVIDIA_TESLA_P100",
    NvidiaTeslaV100 = "NVIDIA_TESLA_V100",
    NvidiaTeslaP4 = "NVIDIA_TESLA_P4",
    NvidiaTeslaT4 = "NVIDIA_TESLA_T4",
    NvidiaTeslaA100 = "NVIDIA_TESLA_A100",
    TpuV2 = "TPU_V2",
    TpuV3 = "TPU_V3",
    NvidiaTeslaT4Vws = "NVIDIA_TESLA_T4_VWS",
    NvidiaTeslaP100Vws = "NVIDIA_TESLA_P100_VWS",
    NvidiaTeslaP4Vws = "NVIDIA_TESLA_P4_VWS"
}
/**
 * Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
**/
export declare class RuntimeAcceleratorConfig extends SpeakeasyBase {
    coreCount?: string;
    type?: RuntimeAcceleratorConfigTypeEnum;
}
