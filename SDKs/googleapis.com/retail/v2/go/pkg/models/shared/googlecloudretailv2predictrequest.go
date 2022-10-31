package shared



type GoogleCloudRetailV2PredictRequest struct {
    Filter *string `json:"filter,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    Params map[string]interface{} `json:"params,omitempty"`
    UserEvent *GoogleCloudRetailV2UserEvent `json:"userEvent,omitempty"`
    ValidateOnly *bool `json:"validateOnly,omitempty"`
    
}

