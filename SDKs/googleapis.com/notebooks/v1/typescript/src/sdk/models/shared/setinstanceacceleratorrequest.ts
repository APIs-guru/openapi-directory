import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SetInstanceAcceleratorRequestTypeEnum {
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


// SetInstanceAcceleratorRequest
/** 
 * Request for setting instance accelerator.
**/
export class SetInstanceAcceleratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coreCount" })
  coreCount?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SetInstanceAcceleratorRequestTypeEnum;
}
