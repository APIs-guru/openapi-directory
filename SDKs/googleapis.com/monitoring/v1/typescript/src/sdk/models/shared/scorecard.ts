import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GaugeView } from "./gaugeview";
import { SparkChartView } from "./sparkchartview";
import { Threshold } from "./threshold";
import { TimeSeriesQuery } from "./timeseriesquery";


// Scorecard
/** 
 * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
**/
export class Scorecard extends SpeakeasyBase {
  @Metadata({ data: "json, name=gaugeView" })
  gaugeView?: GaugeView;

  @Metadata({ data: "json, name=sparkChartView" })
  sparkChartView?: SparkChartView;

  @Metadata({ data: "json, name=thresholds", elemType: shared.Threshold })
  thresholds?: Threshold[];

  @Metadata({ data: "json, name=timeSeriesQuery" })
  timeSeriesQuery?: TimeSeriesQuery;
}
