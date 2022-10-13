package shared

type InstanceWebDetails struct {
	Kind      *string `json:"kind"`
	LaunchURL *string `json:"launchUrl"`
	Preferred *bool   `json:"preferred"`
}
