package shared

// SasPortalPolicy
// Defines an access control policy to the resources.
type SasPortalPolicy struct {
	Assignments []SasPortalAssignment `json:"assignments,omitempty"`
	Etag        *string               `json:"etag,omitempty"`
}
