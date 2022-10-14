package shared

type SasPortalPolicy struct {
	Assignments []SasPortalAssignment `json:"assignments,omitempty"`
	Etag        *string               `json:"etag,omitempty"`
}
