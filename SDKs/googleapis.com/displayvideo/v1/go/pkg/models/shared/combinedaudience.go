package shared

// CombinedAudience
// Describes a combined audience resource.
type CombinedAudience struct {
	CombinedAudienceID *string `json:"combinedAudienceId,omitempty"`
	DisplayName        *string `json:"displayName,omitempty"`
	Name               *string `json:"name,omitempty"`
}
