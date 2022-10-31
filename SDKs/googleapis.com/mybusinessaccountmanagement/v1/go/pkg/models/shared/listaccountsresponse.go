package shared



type ListAccountsResponse struct {
    Accounts []Account `json:"accounts,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

