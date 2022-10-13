package shared

type EntityAnnotation struct {
	BoundingPoly *BoundingPoly  `json:"boundingPoly"`
	Confidence   *float32       `json:"confidence"`
	Description  *string        `json:"description"`
	Locale       *string        `json:"locale"`
	Locations    []LocationInfo `json:"locations"`
	Mid          *string        `json:"mid"`
	Properties   []Property     `json:"properties"`
	Score        *float32       `json:"score"`
	Topicality   *float32       `json:"topicality"`
}
