package shared

type Paragraph struct {
	BoundingBox *BoundingPoly `json:"boundingBox"`
	Confidence  *float32      `json:"confidence"`
	Property    *TextProperty `json:"property"`
	Words       []Word        `json:"words"`
}
