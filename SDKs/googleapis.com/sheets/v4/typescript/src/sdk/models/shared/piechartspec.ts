import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";
import { ChartData } from "./chartdata";

export enum PieChartSpecLegendPositionEnum {
    PieChartLegendPositionUnspecified = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED"
,    BottomLegend = "BOTTOM_LEGEND"
,    LeftLegend = "LEFT_LEGEND"
,    RightLegend = "RIGHT_LEGEND"
,    TopLegend = "TOP_LEGEND"
,    NoLegend = "NO_LEGEND"
,    LabeledLegend = "LABELED_LEGEND"
}


// PieChartSpec
/** 
 * A pie chart.
**/
export class PieChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: ChartData;

  @Metadata({ data: "json, name=legendPosition" })
  legendPosition?: PieChartSpecLegendPositionEnum;

  @Metadata({ data: "json, name=pieHole" })
  pieHole?: number;

  @Metadata({ data: "json, name=series" })
  series?: ChartData;

  @Metadata({ data: "json, name=threeDimensional" })
  threeDimensional?: boolean;
}
