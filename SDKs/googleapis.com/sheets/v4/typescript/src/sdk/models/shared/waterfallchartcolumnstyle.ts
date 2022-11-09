import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";


// WaterfallChartColumnStyle
/** 
 * Styles for a waterfall chart column.
**/
export class WaterfallChartColumnStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: Color;

  @Metadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;

  @Metadata({ data: "json, name=label" })
  label?: string;
}
