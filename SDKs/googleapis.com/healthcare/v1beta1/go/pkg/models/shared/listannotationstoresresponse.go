package shared



type ListAnnotationStoresResponse struct {
    AnnotationStores []AnnotationStore `json:"annotationStores,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

