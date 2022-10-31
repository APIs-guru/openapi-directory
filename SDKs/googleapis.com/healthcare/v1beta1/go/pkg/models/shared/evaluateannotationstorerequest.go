package shared



type EvaluateAnnotationStoreRequest struct {
    BigqueryDestination *GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination `json:"bigqueryDestination,omitempty"`
    EvalInfoTypeMapping map[string]string `json:"evalInfoTypeMapping,omitempty"`
    GoldenInfoTypeMapping map[string]string `json:"goldenInfoTypeMapping,omitempty"`
    GoldenStore *string `json:"goldenStore,omitempty"`
    InfoTypeConfig *InfoTypeConfig `json:"infoTypeConfig,omitempty"`
    
}

