import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
/**
 * A color scale for a treemap chart.
**/
export declare class TreemapChartColorScale extends SpeakeasyBase {
    maxValueColor?: Color;
    maxValueColorStyle?: ColorStyle;
    midValueColor?: Color;
    midValueColorStyle?: ColorStyle;
    minValueColor?: Color;
    minValueColorStyle?: ColorStyle;
    noDataColor?: Color;
    noDataColorStyle?: ColorStyle;
}
