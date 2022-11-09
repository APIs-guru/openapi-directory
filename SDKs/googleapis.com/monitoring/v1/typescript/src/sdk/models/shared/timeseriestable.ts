import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableDataSet } from "./tabledataset";

export enum TimeSeriesTableMetricVisualizationEnum {
    MetricVisualizationUnspecified = "METRIC_VISUALIZATION_UNSPECIFIED"
,    Number = "NUMBER"
,    Bar = "BAR"
}


// TimeSeriesTable
/** 
 * A table that displays time series data.
**/
export class TimeSeriesTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSets", elemType: shared.TableDataSet })
  dataSets?: TableDataSet[];

  @Metadata({ data: "json, name=metricVisualization" })
  metricVisualization?: TimeSeriesTableMetricVisualizationEnum;
}
