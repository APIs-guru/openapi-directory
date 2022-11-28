package shared

// EntityAnnotation
// Set of detected entity features.
type EntityAnnotation struct {
	BoundingPoly *BoundingPoly  `json:"boundingPoly,omitempty"`
	Confidence   *float32       `json:"confidence,omitempty"`
	Description  *string        `json:"description,omitempty"`
	Locale       *string        `json:"locale,omitempty"`
	Locations    []LocationInfo `json:"locations,omitempty"`
	Mid          *string        `json:"mid,omitempty"`
	Properties   []Property     `json:"properties,omitempty"`
	Score        *float32       `json:"score,omitempty"`
	Topicality   *float32       `json:"topicality,omitempty"`
}
