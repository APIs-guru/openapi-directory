package shared

type Datafeed struct {
	AttributeLanguage *string                `json:"attributeLanguage,omitempty"`
	ContentType       *string                `json:"contentType,omitempty"`
	FetchSchedule     *DatafeedFetchSchedule `json:"fetchSchedule,omitempty"`
	FileName          *string                `json:"fileName,omitempty"`
	Format            *DatafeedFormat        `json:"format,omitempty"`
	ID                *string                `json:"id,omitempty"`
	Kind              *string                `json:"kind,omitempty"`
	Name              *string                `json:"name,omitempty"`
	Targets           []DatafeedTarget       `json:"targets,omitempty"`
}
