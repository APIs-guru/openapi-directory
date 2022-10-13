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

type ProfileReferrals struct {
	Code      *string `json:"code"`
	Completed *int64  `json:"completed"`
	Credit    *int64  `json:"credit"`
	Pending   *int64  `json:"pending"`
	Total     *int64  `json:"total"`
	URL       *string `json:"url"`
}

type Profile struct {
	AuthenticationType *ProfileAuthenticationTypeEnum `json:"authentication_type"`
	AuthorizedKeys     []string                       `json:"authorized_keys"`
	Email              *string                        `json:"email"`
	EmailNotifications *bool                          `json:"email_notifications"`
	IPWhitelistEnabled *bool                          `json:"ip_whitelist_enabled"`
	LishAuthMethod     *ProfileLishAuthMethodEnum     `json:"lish_auth_method"`
	Referrals          *ProfileReferrals              `json:"referrals"`
	Restricted         *bool                          `json:"restricted"`
	Timezone           *string                        `json:"timezone"`
	TwoFactorAuth      *bool                          `json:"two_factor_auth"`
	UID                *int64                         `json:"uid"`
	Username           *string                        `json:"username"`
}
