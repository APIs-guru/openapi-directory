package shared

// ListAnnotationStoresResponse
// Lists the Annotation stores in the given dataset.
type ListAnnotationStoresResponse struct {
	AnnotationStores []AnnotationStore `json:"annotationStores,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
