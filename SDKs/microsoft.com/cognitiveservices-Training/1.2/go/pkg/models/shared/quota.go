package shared



type Quota struct {
    TimeUntilReset *string `json:"TimeUntilReset,omitempty"`
    Total *int32 `json:"Total,omitempty"`
    Used *int32 `json:"Used,omitempty"`
    
}

