import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SetInstanceAcceleratorRequestTypeEnum {
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
 * Request for setting instance accelerator.
**/
export declare class SetInstanceAcceleratorRequest extends SpeakeasyBase {
    coreCount?: string;
    type?: SetInstanceAcceleratorRequestTypeEnum;
}
