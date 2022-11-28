import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AcceleratorAcceleratorTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED",
    Cdc = "CDC",
    Healthcare = "HEALTHCARE"
}


// Accelerator
/** 
 * Identifies Data Fusion accelerators for an instance.
**/
export class Accelerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorType" })
  acceleratorType?: AcceleratorAcceleratorTypeEnum;
}
