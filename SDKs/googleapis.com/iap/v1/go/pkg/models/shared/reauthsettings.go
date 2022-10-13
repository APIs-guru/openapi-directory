package shared

type ReauthSettingsMethodEnum string

const (
	ReauthSettingsMethodEnumMethodUnspecified ReauthSettingsMethodEnum = "METHOD_UNSPECIFIED"
	ReauthSettingsMethodEnumLogin             ReauthSettingsMethodEnum = "LOGIN"
	ReauthSettingsMethodEnumSecureKey         ReauthSettingsMethodEnum = "SECURE_KEY"
)

type ReauthSettingsPolicyTypeEnum string

const (
	ReauthSettingsPolicyTypeEnumPolicyTypeUnspecified ReauthSettingsPolicyTypeEnum = "POLICY_TYPE_UNSPECIFIED"
	ReauthSettingsPolicyTypeEnumMinimum               ReauthSettingsPolicyTypeEnum = "MINIMUM"
	ReauthSettingsPolicyTypeEnumDefault               ReauthSettingsPolicyTypeEnum = "DEFAULT"
)

type ReauthSettings struct {
	MaxAge     *string                       `json:"maxAge"`
	Method     *ReauthSettingsMethodEnum     `json:"method"`
	PolicyType *ReauthSettingsPolicyTypeEnum `json:"policyType"`
}
