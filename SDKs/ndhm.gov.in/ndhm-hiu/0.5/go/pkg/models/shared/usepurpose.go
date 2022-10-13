package shared

type UsePurpose struct {
	Code   string  `json:"code"`
	RefURI *string `json:"refUri"`
	Text   string  `json:"text"`
}
