package shared



type GoogleCloudVisionV1p1beta1EntityAnnotation struct {
    BoundingPoly *GoogleCloudVisionV1p1beta1BoundingPoly `json:"boundingPoly,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    Description *string `json:"description,omitempty"`
    Locale *string `json:"locale,omitempty"`
    Locations []GoogleCloudVisionV1p1beta1LocationInfo `json:"locations,omitempty"`
    Mid *string `json:"mid,omitempty"`
    Properties []GoogleCloudVisionV1p1beta1Property `json:"properties,omitempty"`
    Score *float32 `json:"score,omitempty"`
    Topicality *float32 `json:"topicality,omitempty"`
    
}

