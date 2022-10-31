package shared

type DetectionsResource struct {
	Confidence *float32 `json:"confidence,omitempty"`
	IsReliable *bool    `json:"isReliable,omitempty"`
	Language   *string  `json:"language,omitempty"`
}
