package shared

type ScaleQuestion struct {
	High      *int32  `json:"high"`
	HighLabel *string `json:"highLabel"`
	Low       *int32  `json:"low"`
	LowLabel  *string `json:"lowLabel"`
}
