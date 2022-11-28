package shared

type LogMetricVersionEnum string

const (
	LogMetricVersionEnumV2 LogMetricVersionEnum = "V2"
	LogMetricVersionEnumV1 LogMetricVersionEnum = "V1"
)

// LogMetricInput
// Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
type LogMetricInput struct {
	BucketName       *string               `json:"bucketName,omitempty"`
	BucketOptions    *BucketOptions        `json:"bucketOptions,omitempty"`
	Description      *string               `json:"description,omitempty"`
	Disabled         *bool                 `json:"disabled,omitempty"`
	Filter           *string               `json:"filter,omitempty"`
	LabelExtractors  map[string]string     `json:"labelExtractors,omitempty"`
	MetricDescriptor *MetricDescriptor     `json:"metricDescriptor,omitempty"`
	Name             *string               `json:"name,omitempty"`
	ValueExtractor   *string               `json:"valueExtractor,omitempty"`
	Version          *LogMetricVersionEnum `json:"version,omitempty"`
}

// LogMetric
// Describes a logs-based metric. The value of the metric is the number of log entries that match a logs filter in a given time interval.Logs-based metrics can also be used to extract values from logs and create a distribution of the values. The distribution records the statistics of the extracted values along with an optional histogram of the values as specified by the bucket options.
type LogMetric struct {
	BucketName       *string               `json:"bucketName,omitempty"`
	BucketOptions    *BucketOptions        `json:"bucketOptions,omitempty"`
	CreateTime       *string               `json:"createTime,omitempty"`
	Description      *string               `json:"description,omitempty"`
	Disabled         *bool                 `json:"disabled,omitempty"`
	Filter           *string               `json:"filter,omitempty"`
	LabelExtractors  map[string]string     `json:"labelExtractors,omitempty"`
	MetricDescriptor *MetricDescriptor     `json:"metricDescriptor,omitempty"`
	Name             *string               `json:"name,omitempty"`
	UpdateTime       *string               `json:"updateTime,omitempty"`
	ValueExtractor   *string               `json:"valueExtractor,omitempty"`
	Version          *LogMetricVersionEnum `json:"version,omitempty"`
}
