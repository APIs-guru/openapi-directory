package shared

type Reviewer struct {
	DisplayName     *string `json:"displayName"`
	IsAnonymous     *bool   `json:"isAnonymous"`
	ProfilePhotoURL *string `json:"profilePhotoUrl"`
}
