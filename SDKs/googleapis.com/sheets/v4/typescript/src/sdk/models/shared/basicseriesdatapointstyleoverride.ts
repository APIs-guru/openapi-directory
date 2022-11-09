import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { PointStyle } from "./pointstyle";


// BasicSeriesDataPointStyleOverride
/** 
 * Style override settings for a single series data point.
**/
export class BasicSeriesDataPointStyleOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: Color;

  @Metadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=pointStyle" })
  pointStyle?: PointStyle;
}
