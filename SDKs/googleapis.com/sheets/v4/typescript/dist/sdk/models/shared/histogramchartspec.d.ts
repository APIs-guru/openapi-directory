import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramSeries } from "./histogramseries";
export declare enum HistogramChartSpecLegendPositionEnum {
    HistogramChartLegendPositionUnspecified = "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND",
    InsideLegend = "INSIDE_LEGEND"
}
/**
 * A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
**/
export declare class HistogramChartSpec extends SpeakeasyBase {
    bucketSize?: number;
    legendPosition?: HistogramChartSpecLegendPositionEnum;
    outlierPercentile?: number;
    series?: HistogramSeries[];
    showItemDividers?: boolean;
}
