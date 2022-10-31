package shared



type GoogleCloudVisionV1p2beta1Paragraph struct {
    BoundingBox *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingBox,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Property *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property,omitempty"`
    Words []GoogleCloudVisionV1p2beta1Word `json:"words,omitempty"`
    
}

