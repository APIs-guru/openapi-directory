package shared

type LogMetricVersionEnum string

const (
	LogMetricVersionEnumV2 LogMetricVersionEnum = "V2"
	LogMetricVersionEnumV1 LogMetricVersionEnum = "V1"
)

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
