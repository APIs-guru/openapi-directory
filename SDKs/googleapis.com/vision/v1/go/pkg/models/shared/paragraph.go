package shared

// Paragraph
// Structural unit of text representing a number of words in certain order.
type Paragraph struct {
	BoundingBox *BoundingPoly `json:"boundingBox,omitempty"`
	Confidence  *float32      `json:"confidence,omitempty"`
	Property    *TextProperty `json:"property,omitempty"`
	Words       []Word        `json:"words,omitempty"`
}
