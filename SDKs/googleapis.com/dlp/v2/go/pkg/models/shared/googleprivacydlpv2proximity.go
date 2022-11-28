package shared

// GooglePrivacyDlpV2Proximity
// Message for specifying a window around a finding to apply a detection rule.
type GooglePrivacyDlpV2Proximity struct {
	WindowAfter  *int32 `json:"windowAfter,omitempty"`
	WindowBefore *int32 `json:"windowBefore,omitempty"`
}
