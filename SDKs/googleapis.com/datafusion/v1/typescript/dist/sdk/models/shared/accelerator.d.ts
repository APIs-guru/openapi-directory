import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AcceleratorAcceleratorTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED",
    Cdc = "CDC",
    Healthcare = "HEALTHCARE",
    CcaiInsights = "CCAI_INSIGHTS"
}
export declare enum AcceleratorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Unknown = "UNKNOWN"
}
/**
 * Identifies Data Fusion accelerators for an instance.
**/
export declare class Accelerator extends SpeakeasyBase {
    acceleratorType?: AcceleratorAcceleratorTypeEnum;
    state?: AcceleratorStateEnum;
}
