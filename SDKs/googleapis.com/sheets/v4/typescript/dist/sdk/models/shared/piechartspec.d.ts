import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
export declare enum PieChartSpecLegendPositionEnum {
    PieChartLegendPositionUnspecified = "PIE_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND",
    LabeledLegend = "LABELED_LEGEND"
}
/**
 * A pie chart.
**/
export declare class PieChartSpec extends SpeakeasyBase {
    domain?: ChartData;
    legendPosition?: PieChartSpecLegendPositionEnum;
    pieHole?: number;
    series?: ChartData;
    threeDimensional?: boolean;
}
