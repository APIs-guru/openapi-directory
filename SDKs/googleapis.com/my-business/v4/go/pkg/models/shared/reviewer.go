package shared

// Reviewer
// Represents the author of the review.
type Reviewer struct {
	DisplayName     *string `json:"displayName,omitempty"`
	IsAnonymous     *bool   `json:"isAnonymous,omitempty"`
	ProfilePhotoURL *string `json:"profilePhotoUrl,omitempty"`
}
