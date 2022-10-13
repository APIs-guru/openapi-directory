package shared

type EvaluateAnnotationStoreRequest struct {
	BigqueryDestination   *GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination `json:"bigqueryDestination"`
	EvalInfoTypeMapping   map[string]string                                          `json:"evalInfoTypeMapping"`
	GoldenInfoTypeMapping map[string]string                                          `json:"goldenInfoTypeMapping"`
	GoldenStore           *string                                                    `json:"goldenStore"`
	InfoTypeConfig        *InfoTypeConfig                                            `json:"infoTypeConfig"`
}
