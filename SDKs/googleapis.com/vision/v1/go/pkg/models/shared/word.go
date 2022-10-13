package shared

type Word struct {
	BoundingBox *BoundingPoly `json:"boundingBox"`
	Confidence  *float32      `json:"confidence"`
	Property    *TextProperty `json:"property"`
	Symbols     []Symbol      `json:"symbols"`
}
