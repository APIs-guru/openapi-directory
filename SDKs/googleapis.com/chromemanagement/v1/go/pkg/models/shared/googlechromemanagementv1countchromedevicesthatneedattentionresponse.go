package shared

// GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
// Response containing counts for devices that need attention.
type GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse struct {
	NoRecentPolicySyncCount    *string `json:"noRecentPolicySyncCount,omitempty"`
	NoRecentUserActivityCount  *string `json:"noRecentUserActivityCount,omitempty"`
	OsVersionNotCompliantCount *string `json:"osVersionNotCompliantCount,omitempty"`
	PendingUpdate              *string `json:"pendingUpdate,omitempty"`
	UnsupportedPolicyCount     *string `json:"unsupportedPolicyCount,omitempty"`
}
