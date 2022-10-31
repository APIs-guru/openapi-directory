package shared



type ListAnnotationsResponse struct {
    Annotations []Annotation `json:"annotations,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

