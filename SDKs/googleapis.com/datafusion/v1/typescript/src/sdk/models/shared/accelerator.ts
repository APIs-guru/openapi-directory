import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AcceleratorAcceleratorTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED"
,    Cdc = "CDC"
,    Healthcare = "HEALTHCARE"
,    CcaiInsights = "CCAI_INSIGHTS"
}

export enum AcceleratorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
,    Unknown = "UNKNOWN"
}


// Accelerator
/** 
 * Identifies Data Fusion accelerators for an instance.
**/
export class Accelerator extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorType" })
  acceleratorType?: AcceleratorAcceleratorTypeEnum;

  @Metadata({ data: "json, name=state" })
  state?: AcceleratorStateEnum;
}
