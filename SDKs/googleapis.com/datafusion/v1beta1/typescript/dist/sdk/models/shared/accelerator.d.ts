import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AcceleratorAcceleratorTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED",
    Cdc = "CDC",
    Healthcare = "HEALTHCARE"
}
/**
 * Identifies Data Fusion accelerators for an instance.
**/
export declare class Accelerator extends SpeakeasyBase {
    acceleratorType?: AcceleratorAcceleratorTypeEnum;
}
