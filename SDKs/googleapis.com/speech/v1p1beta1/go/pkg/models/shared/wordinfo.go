package shared

type WordInfo struct {
	Confidence *float32 `json:"confidence,omitempty"`
	EndTime    *string  `json:"endTime,omitempty"`
	SpeakerTag *int32   `json:"speakerTag,omitempty"`
	StartTime  *string  `json:"startTime,omitempty"`
	Word       *string  `json:"word,omitempty"`
}
