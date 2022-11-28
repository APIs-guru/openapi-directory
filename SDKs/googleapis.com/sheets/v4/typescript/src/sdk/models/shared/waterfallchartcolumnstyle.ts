import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";



// WaterfallChartColumnStyle
/** 
 * Styles for a waterfall chart column.
**/
export class WaterfallChartColumnStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}
