package shared

// PlatformType
// Contains information about a platform type that can be targeted by ads.
type PlatformType struct {
	ID   *string `json:"id,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
}
