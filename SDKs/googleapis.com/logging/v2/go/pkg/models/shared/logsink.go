package shared




type LogSinkOutputVersionFormatEnum string

const (
    LogSinkOutputVersionFormatEnumVersionFormatUnspecified LogSinkOutputVersionFormatEnum = "VERSION_FORMAT_UNSPECIFIED"
LogSinkOutputVersionFormatEnumV2 LogSinkOutputVersionFormatEnum = "V2"
LogSinkOutputVersionFormatEnumV1 LogSinkOutputVersionFormatEnum = "V1"
)


type LogSink struct {
    BigqueryOptions *BigQueryOptions `json:"bigqueryOptions,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Destination *string `json:"destination,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    Exclusions []LogExclusion `json:"exclusions,omitempty"`
    Filter *string `json:"filter,omitempty"`
    IncludeChildren *bool `json:"includeChildren,omitempty"`
    Name *string `json:"name,omitempty"`
    OutputVersionFormat *LogSinkOutputVersionFormatEnum `json:"outputVersionFormat,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    WriterIdentity *string `json:"writerIdentity,omitempty"`
    
}

