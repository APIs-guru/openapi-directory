package shared

type Symbol struct {
	BoundingBox *BoundingPoly `json:"boundingBox"`
	Confidence  *float32      `json:"confidence"`
	Property    *TextProperty `json:"property"`
	Text        *string       `json:"text"`
}
