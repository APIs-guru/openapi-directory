package shared




type ProfileAuthenticationTypeEnum string

const (
    ProfileAuthenticationTypeEnumPassword ProfileAuthenticationTypeEnum = "password"
ProfileAuthenticationTypeEnumGithub ProfileAuthenticationTypeEnum = "github"
)



type ProfileLishAuthMethodEnum string

const (
    ProfileLishAuthMethodEnumPasswordKeys ProfileLishAuthMethodEnum = "password_keys"
ProfileLishAuthMethodEnumKeysOnly ProfileLishAuthMethodEnum = "keys_only"
ProfileLishAuthMethodEnumDisabled ProfileLishAuthMethodEnum = "disabled"
)


type ProfileReferrals struct {
    Code *string `json:"code,omitempty"`
    Completed *int64 `json:"completed,omitempty"`
    Credit *int64 `json:"credit,omitempty"`
    Pending *int64 `json:"pending,omitempty"`
    Total *int64 `json:"total,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type Profile struct {
    AuthenticationType *ProfileAuthenticationTypeEnum `json:"authentication_type,omitempty"`
    AuthorizedKeys []string `json:"authorized_keys,omitempty"`
    Email *string `json:"email,omitempty"`
    EmailNotifications *bool `json:"email_notifications,omitempty"`
    IPWhitelistEnabled *bool `json:"ip_whitelist_enabled,omitempty"`
    LishAuthMethod *ProfileLishAuthMethodEnum `json:"lish_auth_method,omitempty"`
    Referrals *ProfileReferrals `json:"referrals,omitempty"`
    Restricted *bool `json:"restricted,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    TwoFactorAuth *bool `json:"two_factor_auth,omitempty"`
    UID *int64 `json:"uid,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

