package shared



type AvailablePrefix struct {
    Family *int64 `json:"family,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    Vrf *NestedVrf `json:"vrf,omitempty"`
    
}

