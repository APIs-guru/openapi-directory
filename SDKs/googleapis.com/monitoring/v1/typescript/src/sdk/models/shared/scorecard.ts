import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GaugeView } from "./gaugeview";
import { SparkChartView } from "./sparkchartview";
import { Threshold } from "./threshold";
import { TimeSeriesQuery } from "./timeseriesquery";



// Scorecard
/** 
 * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
**/
export class Scorecard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gaugeView" })
  gaugeView?: GaugeView;

  @SpeakeasyMetadata({ data: "json, name=sparkChartView" })
  sparkChartView?: SparkChartView;

  @SpeakeasyMetadata({ data: "json, name=thresholds", elemType: Threshold })
  thresholds?: Threshold[];

  @SpeakeasyMetadata({ data: "json, name=timeSeriesQuery" })
  timeSeriesQuery?: TimeSeriesQuery;
}
