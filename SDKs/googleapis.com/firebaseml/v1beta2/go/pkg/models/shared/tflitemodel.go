package shared



type TfLiteModel struct {
    AutomlModel *string `json:"automlModel,omitempty"`
    GcsTfliteURI *string `json:"gcsTfliteUri,omitempty"`
    SizeBytes *string `json:"sizeBytes,omitempty"`
    
}

