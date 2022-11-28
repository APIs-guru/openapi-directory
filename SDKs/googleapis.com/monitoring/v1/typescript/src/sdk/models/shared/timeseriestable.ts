import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnSettings } from "./columnsettings";
import { TableDataSet } from "./tabledataset";


export enum TimeSeriesTableMetricVisualizationEnum {
    MetricVisualizationUnspecified = "METRIC_VISUALIZATION_UNSPECIFIED",
    Number = "NUMBER",
    Bar = "BAR"
}


// TimeSeriesTable
/** 
 * A table that displays time series data.
**/
export class TimeSeriesTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSettings", elemType: ColumnSettings })
  columnSettings?: ColumnSettings[];

  @SpeakeasyMetadata({ data: "json, name=dataSets", elemType: TableDataSet })
  dataSets?: TableDataSet[];

  @SpeakeasyMetadata({ data: "json, name=metricVisualization" })
  metricVisualization?: TimeSeriesTableMetricVisualizationEnum;
}
