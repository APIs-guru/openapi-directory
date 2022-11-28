package shared

// AnnotationConfig
// Specifies how to store annotations during de-identification operation.
type AnnotationConfig struct {
	AnnotationStoreName *string `json:"annotationStoreName,omitempty"`
	StoreQuote          *bool   `json:"storeQuote,omitempty"`
}
