package shared

// GoogleAppsDriveLabelsV2LifecycleDisabledPolicy
// The policy that governs how to treat a disabled label, field, or selection choice in different contexts.
type GoogleAppsDriveLabelsV2LifecycleDisabledPolicy struct {
	HideInSearch *bool `json:"hideInSearch,omitempty"`
	ShowInApply  *bool `json:"showInApply,omitempty"`
}
