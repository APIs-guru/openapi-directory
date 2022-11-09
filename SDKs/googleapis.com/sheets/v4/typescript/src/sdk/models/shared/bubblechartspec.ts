import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";
import { ChartData } from "./chartdata";
import { ChartData } from "./chartdata";
import { ChartData } from "./chartdata";

export enum BubbleChartSpecLegendPositionEnum {
    BubbleChartLegendPositionUnspecified = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED"
,    BottomLegend = "BOTTOM_LEGEND"
,    LeftLegend = "LEFT_LEGEND"
,    RightLegend = "RIGHT_LEGEND"
,    TopLegend = "TOP_LEGEND"
,    NoLegend = "NO_LEGEND"
,    InsideLegend = "INSIDE_LEGEND"
}


// BubbleChartSpec
/** 
 * A bubble chart.
**/
export class BubbleChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=bubbleBorderColor" })
  bubbleBorderColor?: Color;

  @Metadata({ data: "json, name=bubbleBorderColorStyle" })
  bubbleBorderColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=bubbleLabels" })
  bubbleLabels?: ChartData;

  @Metadata({ data: "json, name=bubbleMaxRadiusSize" })
  bubbleMaxRadiusSize?: number;

  @Metadata({ data: "json, name=bubbleMinRadiusSize" })
  bubbleMinRadiusSize?: number;

  @Metadata({ data: "json, name=bubbleOpacity" })
  bubbleOpacity?: number;

  @Metadata({ data: "json, name=bubbleSizes" })
  bubbleSizes?: ChartData;

  @Metadata({ data: "json, name=bubbleTextStyle" })
  bubbleTextStyle?: TextFormat;

  @Metadata({ data: "json, name=domain" })
  domain?: ChartData;

  @Metadata({ data: "json, name=groupIds" })
  groupIds?: ChartData;

  @Metadata({ data: "json, name=legendPosition" })
  legendPosition?: BubbleChartSpecLegendPositionEnum;

  @Metadata({ data: "json, name=series" })
  series?: ChartData;
}
