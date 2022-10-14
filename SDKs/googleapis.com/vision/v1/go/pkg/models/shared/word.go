package shared

type Word struct {
	BoundingBox *BoundingPoly `json:"boundingBox,omitempty"`
	Confidence  *float32      `json:"confidence,omitempty"`
	Property    *TextProperty `json:"property,omitempty"`
	Symbols     []Symbol      `json:"symbols,omitempty"`
}
