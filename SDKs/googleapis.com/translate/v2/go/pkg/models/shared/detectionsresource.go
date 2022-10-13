package shared

type DetectionsResource struct {
	Confidence *float32 `json:"confidence"`
	IsReliable *bool    `json:"isReliable"`
	Language   *string  `json:"language"`
}
