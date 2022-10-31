package shared



type GoogleChromePolicyVersionsV1DefineNetworkRequest struct {
    Name *string `json:"name,omitempty"`
    Settings []GoogleChromePolicyVersionsV1NetworkSetting `json:"settings,omitempty"`
    TargetResource *string `json:"targetResource,omitempty"`
    
}

