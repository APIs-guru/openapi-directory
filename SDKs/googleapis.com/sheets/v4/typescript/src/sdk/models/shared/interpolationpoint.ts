import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";


export enum InterpolationPointTypeEnum {
    InterpolationPointTypeUnspecified = "INTERPOLATION_POINT_TYPE_UNSPECIFIED",
    Min = "MIN",
    Max = "MAX",
    Number = "NUMBER",
    Percent = "PERCENT",
    Percentile = "PERCENTILE"
}


// InterpolationPoint
/** 
 * A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
**/
export class InterpolationPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InterpolationPointTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
