package shared

type GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse struct {
	NoRecentPolicySyncCount    *string `json:"noRecentPolicySyncCount"`
	NoRecentUserActivityCount  *string `json:"noRecentUserActivityCount"`
	OsVersionNotCompliantCount *string `json:"osVersionNotCompliantCount"`
	PendingUpdate              *string `json:"pendingUpdate"`
	UnsupportedPolicyCount     *string `json:"unsupportedPolicyCount"`
}
