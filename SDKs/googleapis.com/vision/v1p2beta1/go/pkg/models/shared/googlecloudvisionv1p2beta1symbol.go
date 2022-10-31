package shared



type GoogleCloudVisionV1p2beta1Symbol struct {
    BoundingBox *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingBox,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Property *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

