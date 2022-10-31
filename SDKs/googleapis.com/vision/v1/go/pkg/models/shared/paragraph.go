package shared



type Paragraph struct {
    BoundingBox *BoundingPoly `json:"boundingBox,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Property *TextProperty `json:"property,omitempty"`
    Words []Word `json:"words,omitempty"`
    
}

