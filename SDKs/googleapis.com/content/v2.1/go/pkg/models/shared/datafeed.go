package shared

type Datafeed struct {
	AttributeLanguage *string                `json:"attributeLanguage"`
	ContentType       *string                `json:"contentType"`
	FetchSchedule     *DatafeedFetchSchedule `json:"fetchSchedule"`
	FileName          *string                `json:"fileName"`
	Format            *DatafeedFormat        `json:"format"`
	ID                *string                `json:"id"`
	Kind              *string                `json:"kind"`
	Name              *string                `json:"name"`
	Targets           []DatafeedTarget       `json:"targets"`
}
