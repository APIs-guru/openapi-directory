import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AcceleratorAcceleratorTypeEnum {
    AcceleratorTypeUnspecified = "ACCELERATOR_TYPE_UNSPECIFIED"
,    Cdc = "CDC"
,    Healthcare = "HEALTHCARE"
}


// Accelerator
/** 
 * Identifies Data Fusion accelerators for an instance.
**/
export class Accelerator extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorType" })
  acceleratorType?: AcceleratorAcceleratorTypeEnum;
}
