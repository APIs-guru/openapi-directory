package shared

type LogSinkOutputVersionFormatEnum string

const (
	LogSinkOutputVersionFormatEnumVersionFormatUnspecified LogSinkOutputVersionFormatEnum = "VERSION_FORMAT_UNSPECIFIED"
	LogSinkOutputVersionFormatEnumV2                       LogSinkOutputVersionFormatEnum = "V2"
	LogSinkOutputVersionFormatEnumV1                       LogSinkOutputVersionFormatEnum = "V1"
)

type LogSink struct {
	BigqueryOptions     *BigQueryOptions                `json:"bigqueryOptions"`
	CreateTime          *string                         `json:"createTime"`
	Description         *string                         `json:"description"`
	Destination         *string                         `json:"destination"`
	Disabled            *bool                           `json:"disabled"`
	Exclusions          []LogExclusion                  `json:"exclusions"`
	Filter              *string                         `json:"filter"`
	IncludeChildren     *bool                           `json:"includeChildren"`
	Name                *string                         `json:"name"`
	OutputVersionFormat *LogSinkOutputVersionFormatEnum `json:"outputVersionFormat"`
	UpdateTime          *string                         `json:"updateTime"`
	WriterIdentity      *string                         `json:"writerIdentity"`
}
