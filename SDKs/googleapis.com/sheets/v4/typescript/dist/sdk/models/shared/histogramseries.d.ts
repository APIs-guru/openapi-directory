import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";
/**
 * A histogram series containing the series color and data.
**/
export declare class HistogramSeries extends SpeakeasyBase {
    barColor?: Color;
    barColorStyle?: ColorStyle;
    data?: ChartData;
}
