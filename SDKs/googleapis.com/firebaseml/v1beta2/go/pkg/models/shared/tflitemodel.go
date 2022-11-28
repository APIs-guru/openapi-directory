package shared

// TfLiteModelInput
// Information that is specific to TfLite models.
type TfLiteModelInput struct {
	AutomlModel  *string `json:"automlModel,omitempty"`
	GcsTfliteURI *string `json:"gcsTfliteUri,omitempty"`
}

// TfLiteModel
// Information that is specific to TfLite models.
type TfLiteModel struct {
	AutomlModel  *string `json:"automlModel,omitempty"`
	GcsTfliteURI *string `json:"gcsTfliteUri,omitempty"`
	SizeBytes    *string `json:"sizeBytes,omitempty"`
}
