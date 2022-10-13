package shared

type Datafeed struct {
	AttributeLanguage    *string                `json:"attributeLanguage"`
	ContentLanguage      *string                `json:"contentLanguage"`
	ContentType          *string                `json:"contentType"`
	FetchSchedule        *DatafeedFetchSchedule `json:"fetchSchedule"`
	FileName             *string                `json:"fileName"`
	Format               *DatafeedFormat        `json:"format"`
	ID                   *string                `json:"id"`
	IntendedDestinations []string               `json:"intendedDestinations"`
	Kind                 *string                `json:"kind"`
	Name                 *string                `json:"name"`
	TargetCountry        *string                `json:"targetCountry"`
	Targets              []DatafeedTarget       `json:"targets"`
}
