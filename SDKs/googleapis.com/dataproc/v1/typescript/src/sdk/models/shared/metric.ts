import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetricMetricSourceEnum {
    MetricSourceUnspecified = "METRIC_SOURCE_UNSPECIFIED",
    MonitoringAgentDefaults = "MONITORING_AGENT_DEFAULTS",
    Hdfs = "HDFS",
    Spark = "SPARK",
    Yarn = "YARN",
    SparkHistoryServer = "SPARK_HISTORY_SERVER",
    Hiveserver2 = "HIVESERVER2"
}


// Metric
/** 
 * A Dataproc OSS metric.
**/
export class Metric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricOverrides" })
  metricOverrides?: string[];

  @SpeakeasyMetadata({ data: "json, name=metricSource" })
  metricSource?: MetricMetricSourceEnum;
}
