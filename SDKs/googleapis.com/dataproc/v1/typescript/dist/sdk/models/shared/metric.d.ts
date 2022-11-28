import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MetricMetricSourceEnum {
    MetricSourceUnspecified = "METRIC_SOURCE_UNSPECIFIED",
    MonitoringAgentDefaults = "MONITORING_AGENT_DEFAULTS",
    Hdfs = "HDFS",
    Spark = "SPARK",
    Yarn = "YARN",
    SparkHistoryServer = "SPARK_HISTORY_SERVER",
    Hiveserver2 = "HIVESERVER2"
}
/**
 * A Dataproc OSS metric.
**/
export declare class Metric extends SpeakeasyBase {
    metricOverrides?: string[];
    metricSource?: MetricMetricSourceEnum;
}
