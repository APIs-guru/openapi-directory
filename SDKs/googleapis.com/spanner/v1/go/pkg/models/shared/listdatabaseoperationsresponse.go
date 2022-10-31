package shared



type ListDatabaseOperationsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Operations []Operation `json:"operations,omitempty"`
    
}

