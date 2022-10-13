package shared

type AmendmentLine struct {
	HangingIndentation *string `json:"hangingIndentation"`
	ImageType          *string `json:"imageType"`
	Indentation        *int32  `json:"indentation"`
	IsImage            *bool   `json:"isImage"`
	Text               *string `json:"text"`
}
