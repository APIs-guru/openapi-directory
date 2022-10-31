package shared



type Symbol struct {
    BoundingBox *BoundingPoly `json:"boundingBox,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Property *TextProperty `json:"property,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

