package shared

type LogSinkOutputVersionFormatEnum string

const (
	LogSinkOutputVersionFormatEnumVersionFormatUnspecified LogSinkOutputVersionFormatEnum = "VERSION_FORMAT_UNSPECIFIED"
	LogSinkOutputVersionFormatEnumV2                       LogSinkOutputVersionFormatEnum = "V2"
	LogSinkOutputVersionFormatEnumV1                       LogSinkOutputVersionFormatEnum = "V1"
)

// LogSink
// Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
type LogSink struct {
	BigqueryOptions     *BigQueryOptions                `json:"bigqueryOptions,omitempty"`
	CreateTime          *string                         `json:"createTime,omitempty"`
	Description         *string                         `json:"description,omitempty"`
	Destination         *string                         `json:"destination,omitempty"`
	Disabled            *bool                           `json:"disabled,omitempty"`
	Exclusions          []LogExclusion                  `json:"exclusions,omitempty"`
	Filter              *string                         `json:"filter,omitempty"`
	IncludeChildren     *bool                           `json:"includeChildren,omitempty"`
	Name                *string                         `json:"name,omitempty"`
	OutputVersionFormat *LogSinkOutputVersionFormatEnum `json:"outputVersionFormat,omitempty"`
	UpdateTime          *string                         `json:"updateTime,omitempty"`
	WriterIdentity      *string                         `json:"writerIdentity,omitempty"`
}

// LogSinkInput
// Describes a sink used to export log entries to one of the following destinations in any project: a Cloud Storage bucket, a BigQuery dataset, a Pub/Sub topic or a Cloud Logging log bucket. A logs filter controls which log entries are exported. The sink must be created within a project, organization, billing account, or folder.
type LogSinkInput struct {
	BigqueryOptions     *BigQueryOptionsInput           `json:"bigqueryOptions,omitempty"`
	Description         *string                         `json:"description,omitempty"`
	Destination         *string                         `json:"destination,omitempty"`
	Disabled            *bool                           `json:"disabled,omitempty"`
	Exclusions          []LogExclusionInput             `json:"exclusions,omitempty"`
	Filter              *string                         `json:"filter,omitempty"`
	IncludeChildren     *bool                           `json:"includeChildren,omitempty"`
	Name                *string                         `json:"name,omitempty"`
	OutputVersionFormat *LogSinkOutputVersionFormatEnum `json:"outputVersionFormat,omitempty"`
}
