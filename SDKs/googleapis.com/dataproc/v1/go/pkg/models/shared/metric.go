package shared

type MetricMetricSourceEnum string

const (
	MetricMetricSourceEnumMetricSourceUnspecified MetricMetricSourceEnum = "METRIC_SOURCE_UNSPECIFIED"
	MetricMetricSourceEnumMonitoringAgentDefaults MetricMetricSourceEnum = "MONITORING_AGENT_DEFAULTS"
	MetricMetricSourceEnumHdfs                    MetricMetricSourceEnum = "HDFS"
	MetricMetricSourceEnumSpark                   MetricMetricSourceEnum = "SPARK"
	MetricMetricSourceEnumYarn                    MetricMetricSourceEnum = "YARN"
	MetricMetricSourceEnumSparkHistoryServer      MetricMetricSourceEnum = "SPARK_HISTORY_SERVER"
	MetricMetricSourceEnumHiveserver2             MetricMetricSourceEnum = "HIVESERVER2"
)

// Metric
// A Dataproc OSS metric.
type Metric struct {
	MetricOverrides []string                `json:"metricOverrides,omitempty"`
	MetricSource    *MetricMetricSourceEnum `json:"metricSource,omitempty"`
}
