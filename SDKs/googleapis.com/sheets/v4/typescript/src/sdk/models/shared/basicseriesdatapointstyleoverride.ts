import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { PointStyle } from "./pointstyle";



// BasicSeriesDataPointStyleOverride
/** 
 * Style override settings for a single series data point.
**/
export class BasicSeriesDataPointStyleOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=pointStyle" })
  pointStyle?: PointStyle;
}
