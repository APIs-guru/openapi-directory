import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SparkChartViewSparkChartTypeEnum {
    SparkChartTypeUnspecified = "SPARK_CHART_TYPE_UNSPECIFIED",
    SparkLine = "SPARK_LINE",
    SparkBar = "SPARK_BAR"
}
/**
 * A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.
**/
export declare class SparkChartView extends SpeakeasyBase {
    minAlignmentPeriod?: string;
    sparkChartType?: SparkChartViewSparkChartTypeEnum;
}
