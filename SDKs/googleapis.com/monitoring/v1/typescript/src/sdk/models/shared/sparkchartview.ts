import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SparkChartViewSparkChartTypeEnum {
    SparkChartTypeUnspecified = "SPARK_CHART_TYPE_UNSPECIFIED",
    SparkLine = "SPARK_LINE",
    SparkBar = "SPARK_BAR"
}


// SparkChartView
/** 
 * A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.
**/
export class SparkChartView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minAlignmentPeriod" })
  minAlignmentPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=sparkChartType" })
  sparkChartType?: SparkChartViewSparkChartTypeEnum;
}
