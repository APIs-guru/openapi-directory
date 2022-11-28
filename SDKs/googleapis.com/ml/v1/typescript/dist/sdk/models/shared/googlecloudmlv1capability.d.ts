import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum {
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
export declare enum GoogleCloudMlV1CapabilityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Training = "TRAINING",
    BatchPrediction = "BATCH_PREDICTION",
    OnlinePrediction = "ONLINE_PREDICTION"
}
export declare class GoogleCloudMlV1Capability extends SpeakeasyBase {
    availableAccelerators?: GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum[];
    type?: GoogleCloudMlV1CapabilityTypeEnum;
}
