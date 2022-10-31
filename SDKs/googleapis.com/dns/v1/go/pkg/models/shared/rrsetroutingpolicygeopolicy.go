package shared



type RrSetRoutingPolicyGeoPolicy struct {
    EnableFencing *bool `json:"enableFencing,omitempty"`
    Items []RrSetRoutingPolicyGeoPolicyGeoPolicyItem `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

