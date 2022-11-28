import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudMlV1AcceleratorConfigTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED",
    NvidiaTeslaK80 = "NVIDIA_TESLA_K80",
    NvidiaTeslaP100 = "NVIDIA_TESLA_P100",
    NvidiaTeslaV100 = "NVIDIA_TESLA_V100",
    NvidiaTeslaP4 = "NVIDIA_TESLA_P4",
    NvidiaTeslaT4 = "NVIDIA_TESLA_T4",
    NvidiaTeslaA100 = "NVIDIA_TESLA_A100",
    TpuV2 = "TPU_V2",
    TpuV3 = "TPU_V3",
    TpuV2Pod = "TPU_V2_POD",
    TpuV3Pod = "TPU_V3_POD"
}
/**
 * Represents a hardware accelerator request config. Note that the AcceleratorConfig can be used in both Jobs and Versions. Learn more about [accelerators for training](/ml-engine/docs/using-gpus) and [accelerators for online prediction](/ml-engine/docs/machine-types-online-prediction#gpus).
**/
export declare class GoogleCloudMlV1AcceleratorConfig extends SpeakeasyBase {
    count?: string;
    type?: GoogleCloudMlV1AcceleratorConfigTypeEnum;
}
