package shared

// GooglePrivacyDlpV2DetectionRule
// Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.
type GooglePrivacyDlpV2DetectionRule struct {
	HotwordRule *GooglePrivacyDlpV2HotwordRule `json:"hotwordRule,omitempty"`
}
