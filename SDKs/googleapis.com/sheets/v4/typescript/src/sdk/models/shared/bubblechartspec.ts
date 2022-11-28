import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";


export enum BubbleChartSpecLegendPositionEnum {
    BubbleChartLegendPositionUnspecified = "BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND",
    InsideLegend = "INSIDE_LEGEND"
}


// BubbleChartSpec
/** 
 * A bubble chart.
**/
export class BubbleChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bubbleBorderColor" })
  bubbleBorderColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=bubbleBorderColorStyle" })
  bubbleBorderColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=bubbleLabels" })
  bubbleLabels?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=bubbleMaxRadiusSize" })
  bubbleMaxRadiusSize?: number;

  @SpeakeasyMetadata({ data: "json, name=bubbleMinRadiusSize" })
  bubbleMinRadiusSize?: number;

  @SpeakeasyMetadata({ data: "json, name=bubbleOpacity" })
  bubbleOpacity?: number;

  @SpeakeasyMetadata({ data: "json, name=bubbleSizes" })
  bubbleSizes?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=bubbleTextStyle" })
  bubbleTextStyle?: TextFormat;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=groupIds" })
  groupIds?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=legendPosition" })
  legendPosition?: BubbleChartSpecLegendPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: ChartData;
}
