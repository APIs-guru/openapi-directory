import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AxisScaleEnum {
    ScaleUnspecified = "SCALE_UNSPECIFIED",
    Linear = "LINEAR",
    Log10 = "LOG10"
}


// Axis
/** 
 * A chart axis.
**/
export class Axis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: AxisScaleEnum;
}
