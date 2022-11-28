package shared

// OperatingSystem
// Contains information about an operating system that can be targeted by ads.
type OperatingSystem struct {
	DartID  *string `json:"dartId,omitempty"`
	Desktop *bool   `json:"desktop,omitempty"`
	Kind    *string `json:"kind,omitempty"`
	Mobile  *bool   `json:"mobile,omitempty"`
	Name    *string `json:"name,omitempty"`
}
