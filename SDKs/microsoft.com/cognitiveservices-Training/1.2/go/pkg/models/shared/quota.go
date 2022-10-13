package shared

type Quota struct {
	TimeUntilReset *string `json:"TimeUntilReset"`
	Total          *int32  `json:"Total"`
	Used           *int32  `json:"Used"`
}
