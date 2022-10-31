package shared



type LookupResponse struct {
    Deferred []Key `json:"deferred,omitempty"`
    Found []EntityResult `json:"found,omitempty"`
    Missing []EntityResult `json:"missing,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    
}

