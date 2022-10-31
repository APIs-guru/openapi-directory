package shared



type GoogleCloudRecommendationengineV1beta1PredictRequest struct {
    DryRun *bool `json:"dryRun,omitempty"`
    Filter *string `json:"filter,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    Params map[string]interface{} `json:"params,omitempty"`
    UserEvent *GoogleCloudRecommendationengineV1beta1UserEvent `json:"userEvent,omitempty"`
    
}

