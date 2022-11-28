package shared

// Domain
// Information about a domain.
type Domain struct {
	LegacyID *string `json:"legacyId,omitempty"`
	Name     *string `json:"name,omitempty"`
}
