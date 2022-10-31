package shared



type ResourceRecordSetsListResponse struct {
    Header *ResponseHeader `json:"header,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Rrsets []ResourceRecordSet `json:"rrsets,omitempty"`
    
}

