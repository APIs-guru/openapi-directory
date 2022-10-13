package shared

type GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum string

const (
	GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnumEnumTypeUnspecified GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum = "ENUM_TYPE_UNSPECIFIED"
	GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnumInspect             GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum = "INSPECT"
	GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnumRiskAnalysis        GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum = "RISK_ANALYSIS"
)

type GooglePrivacyDlpV2InfoTypeDescription struct {
	Categories  []GooglePrivacyDlpV2InfoTypeCategory                   `json:"categories"`
	Description *string                                                `json:"description"`
	DisplayName *string                                                `json:"displayName"`
	Name        *string                                                `json:"name"`
	SupportedBy []GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum `json:"supportedBy"`
	Versions    []GooglePrivacyDlpV2VersionDescription                 `json:"versions"`
}
