package shared

type LogMetricVersionEnum string

const (
	LogMetricVersionEnumV2 LogMetricVersionEnum = "V2"
	LogMetricVersionEnumV1 LogMetricVersionEnum = "V1"
)

type LogMetric struct {
	BucketName       *string               `json:"bucketName"`
	BucketOptions    *BucketOptions        `json:"bucketOptions"`
	CreateTime       *string               `json:"createTime"`
	Description      *string               `json:"description"`
	Disabled         *bool                 `json:"disabled"`
	Filter           *string               `json:"filter"`
	LabelExtractors  map[string]string     `json:"labelExtractors"`
	MetricDescriptor *MetricDescriptor     `json:"metricDescriptor"`
	Name             *string               `json:"name"`
	UpdateTime       *string               `json:"updateTime"`
	ValueExtractor   *string               `json:"valueExtractor"`
	Version          *LogMetricVersionEnum `json:"version"`
}
