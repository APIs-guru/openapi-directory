import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";


// HistogramSeries
/** 
 * A histogram series containing the series color and data.
**/
export class HistogramSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=barColor" })
  barColor?: Color;

  @Metadata({ data: "json, name=barColorStyle" })
  barColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=data" })
  data?: ChartData;
}
