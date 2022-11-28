import { SpeakeasyBase } from "../../../internal/utils";
import { ColumnSettings } from "./columnsettings";
import { TableDataSet } from "./tabledataset";
export declare enum TimeSeriesTableMetricVisualizationEnum {
    MetricVisualizationUnspecified = "METRIC_VISUALIZATION_UNSPECIFIED",
    Number = "NUMBER",
    Bar = "BAR"
}
/**
 * A table that displays time series data.
**/
export declare class TimeSeriesTable extends SpeakeasyBase {
    columnSettings?: ColumnSettings[];
    dataSets?: TableDataSet[];
    metricVisualization?: TimeSeriesTableMetricVisualizationEnum;
}
