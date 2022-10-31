package shared



type GoogleCloudChannelV1ListSubscribersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ServiceAccounts []string `json:"serviceAccounts,omitempty"`
    Topic *string `json:"topic,omitempty"`
    
}

