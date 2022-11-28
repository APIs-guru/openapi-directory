package shared

type ProfileAuthenticationTypeEnum string

const (
	ProfileAuthenticationTypeEnumPassword ProfileAuthenticationTypeEnum = "password"
	ProfileAuthenticationTypeEnumGithub   ProfileAuthenticationTypeEnum = "github"
)

type ProfileLishAuthMethodEnum string

const (
	ProfileLishAuthMethodEnumPasswordKeys ProfileLishAuthMethodEnum = "password_keys"
	ProfileLishAuthMethodEnumKeysOnly     ProfileLishAuthMethodEnum = "keys_only"
	ProfileLishAuthMethodEnumDisabled     ProfileLishAuthMethodEnum = "disabled"
)

// ProfileReferrals
// Information about your status in our referral program.
//
// This information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.
type ProfileReferrals struct {
	Code      *string `json:"code,omitempty"`
	Completed *int64  `json:"completed,omitempty"`
	Credit    *int64  `json:"credit,omitempty"`
	Pending   *int64  `json:"pending,omitempty"`
	Total     *int64  `json:"total,omitempty"`
	URL       *string `json:"url,omitempty"`
}

// Profile
// A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
type Profile struct {
	AuthenticationType *ProfileAuthenticationTypeEnum `json:"authentication_type,omitempty"`
	AuthorizedKeys     []string                       `json:"authorized_keys,omitempty"`
	Email              *string                        `json:"email,omitempty"`
	EmailNotifications *bool                          `json:"email_notifications,omitempty"`
	IPWhitelistEnabled *bool                          `json:"ip_whitelist_enabled,omitempty"`
	LishAuthMethod     *ProfileLishAuthMethodEnum     `json:"lish_auth_method,omitempty"`
	Referrals          *ProfileReferrals              `json:"referrals,omitempty"`
	Restricted         *bool                          `json:"restricted,omitempty"`
	Timezone           *string                        `json:"timezone,omitempty"`
	TwoFactorAuth      *bool                          `json:"two_factor_auth,omitempty"`
	UID                *int64                         `json:"uid,omitempty"`
	Username           *string                        `json:"username,omitempty"`
}

// ProfileInput
// A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
type ProfileInput struct {
	AuthorizedKeys     []string                   `json:"authorized_keys,omitempty"`
	Email              *string                    `json:"email,omitempty"`
	EmailNotifications *bool                      `json:"email_notifications,omitempty"`
	IPWhitelistEnabled *bool                      `json:"ip_whitelist_enabled,omitempty"`
	LishAuthMethod     *ProfileLishAuthMethodEnum `json:"lish_auth_method,omitempty"`
	Restricted         *bool                      `json:"restricted,omitempty"`
	Timezone           *string                    `json:"timezone,omitempty"`
	TwoFactorAuth      *bool                      `json:"two_factor_auth,omitempty"`
}
