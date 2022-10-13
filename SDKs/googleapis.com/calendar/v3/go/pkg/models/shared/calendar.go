package shared

type Calendar struct {
	ConferenceProperties *ConferenceProperties `json:"conferenceProperties"`
	Description          *string               `json:"description"`
	Etag                 *string               `json:"etag"`
	ID                   *string               `json:"id"`
	Kind                 *string               `json:"kind"`
	Location             *string               `json:"location"`
	Summary              *string               `json:"summary"`
	TimeZone             *string               `json:"timeZone"`
}
