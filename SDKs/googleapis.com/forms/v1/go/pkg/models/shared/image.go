package shared



type Image struct {
    AltText *string `json:"altText,omitempty"`
    ContentURI *string `json:"contentUri,omitempty"`
    Properties *MediaProperties `json:"properties,omitempty"`
    SourceURI *string `json:"sourceUri,omitempty"`
    
}

