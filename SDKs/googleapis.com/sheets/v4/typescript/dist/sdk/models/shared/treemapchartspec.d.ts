import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { TreemapChartColorScale } from "./treemapchartcolorscale";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { TextFormat } from "./textformat";
/**
 * A Treemap chart.
**/
export declare class TreemapChartSpec extends SpeakeasyBase {
    colorData?: ChartData;
    colorScale?: TreemapChartColorScale;
    headerColor?: Color;
    headerColorStyle?: ColorStyle;
    hideTooltips?: boolean;
    hintedLevels?: number;
    labels?: ChartData;
    levels?: number;
    maxValue?: number;
    minValue?: number;
    parentLabels?: ChartData;
    sizeData?: ChartData;
    textFormat?: TextFormat;
}
