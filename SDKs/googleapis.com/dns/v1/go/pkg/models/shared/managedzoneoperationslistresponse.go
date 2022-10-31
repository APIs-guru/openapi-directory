package shared



type ManagedZoneOperationsListResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Operations []Operation `json:"operations,omitempty"`
    
}

