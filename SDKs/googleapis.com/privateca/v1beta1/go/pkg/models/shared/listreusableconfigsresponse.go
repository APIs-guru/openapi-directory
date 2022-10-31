package shared



type ListReusableConfigsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ReusableConfigs []ReusableConfig `json:"reusableConfigs,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

