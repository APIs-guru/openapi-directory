package shared

type WordInfo struct {
	Confidence *float32 `json:"confidence"`
	EndTime    *string  `json:"endTime"`
	SpeakerTag *int32   `json:"speakerTag"`
	StartTime  *string  `json:"startTime"`
	Word       *string  `json:"word"`
}
