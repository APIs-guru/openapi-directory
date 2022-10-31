package shared



type SettlementreportsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []SettlementReport `json:"resources,omitempty"`
    
}

