package shared



type SettlementtransactionsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []SettlementTransaction `json:"resources,omitempty"`
    
}

