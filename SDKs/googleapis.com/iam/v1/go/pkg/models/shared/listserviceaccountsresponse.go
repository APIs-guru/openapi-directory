package shared



type ListServiceAccountsResponse struct {
    Accounts []ServiceAccount `json:"accounts,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

