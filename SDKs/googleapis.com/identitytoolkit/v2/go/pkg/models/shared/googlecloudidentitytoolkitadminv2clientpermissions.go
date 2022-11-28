package shared

// GoogleCloudIdentitytoolkitAdminV2ClientPermissions
// Configuration related to restricting a user's ability to affect their account.
type GoogleCloudIdentitytoolkitAdminV2ClientPermissions struct {
	DisabledUserDeletion *bool `json:"disabledUserDeletion,omitempty"`
	DisabledUserSignup   *bool `json:"disabledUserSignup,omitempty"`
}
