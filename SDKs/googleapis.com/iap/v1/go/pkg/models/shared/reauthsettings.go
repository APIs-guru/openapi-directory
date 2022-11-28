package shared

type ReauthSettingsMethodEnum string

const (
	ReauthSettingsMethodEnumMethodUnspecified     ReauthSettingsMethodEnum = "METHOD_UNSPECIFIED"
	ReauthSettingsMethodEnumLogin                 ReauthSettingsMethodEnum = "LOGIN"
	ReauthSettingsMethodEnumSecureKey             ReauthSettingsMethodEnum = "SECURE_KEY"
	ReauthSettingsMethodEnumEnrolledSecondFactors ReauthSettingsMethodEnum = "ENROLLED_SECOND_FACTORS"
)

type ReauthSettingsPolicyTypeEnum string

const (
	ReauthSettingsPolicyTypeEnumPolicyTypeUnspecified ReauthSettingsPolicyTypeEnum = "POLICY_TYPE_UNSPECIFIED"
	ReauthSettingsPolicyTypeEnumMinimum               ReauthSettingsPolicyTypeEnum = "MINIMUM"
	ReauthSettingsPolicyTypeEnumDefault               ReauthSettingsPolicyTypeEnum = "DEFAULT"
)

// ReauthSettings
// Configuration for IAP reauthentication policies.
type ReauthSettings struct {
	MaxAge     *string                       `json:"maxAge,omitempty"`
	Method     *ReauthSettingsMethodEnum     `json:"method,omitempty"`
	PolicyType *ReauthSettingsPolicyTypeEnum `json:"policyType,omitempty"`
}
