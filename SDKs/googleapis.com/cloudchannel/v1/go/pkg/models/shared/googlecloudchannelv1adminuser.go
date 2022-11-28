package shared

// GoogleCloudChannelV1AdminUser
// Information needed to create an Admin User for Google Workspace.
type GoogleCloudChannelV1AdminUser struct {
	Email      *string `json:"email,omitempty"`
	FamilyName *string `json:"familyName,omitempty"`
	GivenName  *string `json:"givenName,omitempty"`
}
