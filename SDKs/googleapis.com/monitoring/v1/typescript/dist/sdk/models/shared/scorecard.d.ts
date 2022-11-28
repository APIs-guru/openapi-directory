import { SpeakeasyBase } from "../../../internal/utils";
import { GaugeView } from "./gaugeview";
import { SparkChartView } from "./sparkchartview";
import { Threshold } from "./threshold";
import { TimeSeriesQuery } from "./timeseriesquery";
/**
 * A widget showing the latest value of a metric, and how this value relates to one or more thresholds.
**/
export declare class Scorecard extends SpeakeasyBase {
    gaugeView?: GaugeView;
    sparkChartView?: SparkChartView;
    thresholds?: Threshold[];
    timeSeriesQuery?: TimeSeriesQuery;
}
