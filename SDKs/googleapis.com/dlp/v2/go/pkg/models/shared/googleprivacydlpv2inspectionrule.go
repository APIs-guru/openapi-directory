package shared

type GooglePrivacyDlpV2InspectionRule struct {
	ExclusionRule *GooglePrivacyDlpV2ExclusionRule `json:"exclusionRule"`
	HotwordRule   *GooglePrivacyDlpV2HotwordRule   `json:"hotwordRule"`
}
