import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AxisScaleEnum {
    ScaleUnspecified = "SCALE_UNSPECIFIED"
,    Linear = "LINEAR"
,    Log10 = "LOG10"
}


// Axis
/** 
 * A chart axis.
**/
export class Axis extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=scale" })
  scale?: AxisScaleEnum;
}
