package shared

type ListAnnotationStoresResponse struct {
	AnnotationStores []AnnotationStore `json:"annotationStores"`
	NextPageToken    *string           `json:"nextPageToken"`
}
