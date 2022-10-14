package shared

type Datafeed struct {
	AttributeLanguage    *string                `json:"attributeLanguage,omitempty"`
	ContentLanguage      *string                `json:"contentLanguage,omitempty"`
	ContentType          *string                `json:"contentType,omitempty"`
	FetchSchedule        *DatafeedFetchSchedule `json:"fetchSchedule,omitempty"`
	FileName             *string                `json:"fileName,omitempty"`
	Format               *DatafeedFormat        `json:"format,omitempty"`
	ID                   *string                `json:"id,omitempty"`
	IntendedDestinations []string               `json:"intendedDestinations,omitempty"`
	Kind                 *string                `json:"kind,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	TargetCountry        *string                `json:"targetCountry,omitempty"`
	Targets              []DatafeedTarget       `json:"targets,omitempty"`
}
