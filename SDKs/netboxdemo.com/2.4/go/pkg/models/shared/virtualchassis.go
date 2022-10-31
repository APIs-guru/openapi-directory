package shared



type VirtualChassis struct {
    Domain *string `json:"domain,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Master NestedDevice `json:"master"`
    Tags []string `json:"tags,omitempty"`
    
}

