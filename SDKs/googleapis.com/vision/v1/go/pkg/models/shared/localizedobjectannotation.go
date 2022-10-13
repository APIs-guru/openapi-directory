package shared

type LocalizedObjectAnnotation struct {
	BoundingPoly *BoundingPoly `json:"boundingPoly"`
	LanguageCode *string       `json:"languageCode"`
	Mid          *string       `json:"mid"`
	Name         *string       `json:"name"`
	Score        *float32      `json:"score"`
}
