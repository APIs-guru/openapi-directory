package shared

// GooglePrivacyDlpV2FindingLimits
// Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
type GooglePrivacyDlpV2FindingLimits struct {
	MaxFindingsPerInfoType []GooglePrivacyDlpV2InfoTypeLimit `json:"maxFindingsPerInfoType,omitempty"`
	MaxFindingsPerItem     *int32                            `json:"maxFindingsPerItem,omitempty"`
	MaxFindingsPerRequest  *int32                            `json:"maxFindingsPerRequest,omitempty"`
}
