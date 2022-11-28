import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";


export enum PieChartSpecLegendPositionEnum {
    PieChartLegendPositionUnspecified = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND",
    LabeledLegend = "LABELED_LEGEND"
}


// PieChartSpec
/** 
 * A pie chart.
**/
export class PieChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=legendPosition" })
  legendPosition?: PieChartSpecLegendPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=pieHole" })
  pieHole?: number;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=threeDimensional" })
  threeDimensional?: boolean;
}
