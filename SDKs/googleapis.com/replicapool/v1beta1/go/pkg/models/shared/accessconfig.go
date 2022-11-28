package shared

// AccessConfig
// A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
type AccessConfig struct {
	Name  *string `json:"name,omitempty"`
	NatIP *string `json:"natIp,omitempty"`
	Type  *string `json:"type,omitempty"`
}
