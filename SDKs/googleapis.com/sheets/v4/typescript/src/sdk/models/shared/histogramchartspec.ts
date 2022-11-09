import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistogramSeries } from "./histogramseries";

export enum HistogramChartSpecLegendPositionEnum {
    HistogramChartLegendPositionUnspecified = "HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED"
,    BottomLegend = "BOTTOM_LEGEND"
,    LeftLegend = "LEFT_LEGEND"
,    RightLegend = "RIGHT_LEGEND"
,    TopLegend = "TOP_LEGEND"
,    NoLegend = "NO_LEGEND"
,    InsideLegend = "INSIDE_LEGEND"
}


// HistogramChartSpec
/** 
 * A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
**/
export class HistogramChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketSize" })
  bucketSize?: number;

  @Metadata({ data: "json, name=legendPosition" })
  legendPosition?: HistogramChartSpecLegendPositionEnum;

  @Metadata({ data: "json, name=outlierPercentile" })
  outlierPercentile?: number;

  @Metadata({ data: "json, name=series", elemType: shared.HistogramSeries })
  series?: HistogramSeries[];

  @Metadata({ data: "json, name=showItemDividers" })
  showItemDividers?: boolean;
}
