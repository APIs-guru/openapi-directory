package shared



type ImageProperties struct {
    Angle *float32 `json:"angle,omitempty"`
    Brightness *float32 `json:"brightness,omitempty"`
    ContentURI *string `json:"contentUri,omitempty"`
    Contrast *float32 `json:"contrast,omitempty"`
    CropProperties *CropProperties `json:"cropProperties,omitempty"`
    SourceURI *string `json:"sourceUri,omitempty"`
    Transparency *float32 `json:"transparency,omitempty"`
    
}

