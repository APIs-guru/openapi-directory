import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";



// HistogramSeries
/** 
 * A histogram series containing the series color and data.
**/
export class HistogramSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barColor" })
  barColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=barColorStyle" })
  barColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ChartData;
}
