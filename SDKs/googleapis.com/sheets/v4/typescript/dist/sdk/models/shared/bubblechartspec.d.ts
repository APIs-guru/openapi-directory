import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";
export declare enum BubbleChartSpecLegendPositionEnum {
    BubbleChartLegendPositionUnspecified = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND",
    InsideLegend = "INSIDE_LEGEND"
}
/**
 * A bubble chart.
**/
export declare class BubbleChartSpec extends SpeakeasyBase {
    bubbleBorderColor?: Color;
    bubbleBorderColorStyle?: ColorStyle;
    bubbleLabels?: ChartData;
    bubbleMaxRadiusSize?: number;
    bubbleMinRadiusSize?: number;
    bubbleOpacity?: number;
    bubbleSizes?: ChartData;
    bubbleTextStyle?: TextFormat;
    domain?: ChartData;
    groupIds?: ChartData;
    legendPosition?: BubbleChartSpecLegendPositionEnum;
    series?: ChartData;
}
