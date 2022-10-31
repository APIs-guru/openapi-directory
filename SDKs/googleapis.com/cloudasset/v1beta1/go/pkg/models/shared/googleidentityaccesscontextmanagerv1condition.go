package shared



type GoogleIdentityAccesscontextmanagerV1Condition struct {
    DevicePolicy *GoogleIdentityAccesscontextmanagerV1DevicePolicy `json:"devicePolicy,omitempty"`
    IPSubnetworks []string `json:"ipSubnetworks,omitempty"`
    Members []string `json:"members,omitempty"`
    Negate *bool `json:"negate,omitempty"`
    Regions []string `json:"regions,omitempty"`
    RequiredAccessLevels []string `json:"requiredAccessLevels,omitempty"`
    
}

