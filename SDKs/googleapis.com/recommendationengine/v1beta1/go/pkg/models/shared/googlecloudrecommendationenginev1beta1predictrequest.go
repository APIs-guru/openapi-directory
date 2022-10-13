package shared

type GoogleCloudRecommendationengineV1beta1PredictRequest struct {
	DryRun    *bool                                            `json:"dryRun"`
	Filter    *string                                          `json:"filter"`
	Labels    map[string]string                                `json:"labels"`
	PageSize  *int32                                           `json:"pageSize"`
	PageToken *string                                          `json:"pageToken"`
	Params    map[string]interface{}                           `json:"params"`
	UserEvent *GoogleCloudRecommendationengineV1beta1UserEvent `json:"userEvent"`
}
