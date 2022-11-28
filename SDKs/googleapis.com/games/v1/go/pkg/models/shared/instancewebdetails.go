package shared

// InstanceWebDetails
// The Web details resource.
type InstanceWebDetails struct {
	Kind      *string `json:"kind,omitempty"`
	LaunchURL *string `json:"launchUrl,omitempty"`
	Preferred *bool   `json:"preferred,omitempty"`
}
