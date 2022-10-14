package shared

type AnnotationConfig struct {
	AnnotationStoreName *string `json:"annotationStoreName,omitempty"`
	StoreQuote          *bool   `json:"storeQuote,omitempty"`
}
