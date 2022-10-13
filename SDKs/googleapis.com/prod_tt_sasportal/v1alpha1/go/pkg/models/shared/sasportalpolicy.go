package shared

type SasPortalPolicy struct {
	Assignments []SasPortalAssignment `json:"assignments"`
	Etag        *string               `json:"etag"`
}
