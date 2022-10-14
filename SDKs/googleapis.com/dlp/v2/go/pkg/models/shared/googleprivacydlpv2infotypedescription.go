package shared

type GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum string

const (
	GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnumEnumTypeUnspecified GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum = "ENUM_TYPE_UNSPECIFIED"
	GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnumInspect             GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum = "INSPECT"
	GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnumRiskAnalysis        GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum = "RISK_ANALYSIS"
)

type GooglePrivacyDlpV2InfoTypeDescription struct {
	Categories  []GooglePrivacyDlpV2InfoTypeCategory                   `json:"categories,omitempty"`
	Description *string                                                `json:"description,omitempty"`
	DisplayName *string                                                `json:"displayName,omitempty"`
	Name        *string                                                `json:"name,omitempty"`
	SupportedBy []GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum `json:"supportedBy,omitempty"`
	Versions    []GooglePrivacyDlpV2VersionDescription                 `json:"versions,omitempty"`
}
