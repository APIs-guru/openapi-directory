package shared

// MethodQuota
// The quota information per method in the Content API.
type MethodQuota struct {
	Method     *string `json:"method,omitempty"`
	QuotaLimit *string `json:"quotaLimit,omitempty"`
	QuotaUsage *string `json:"quotaUsage,omitempty"`
}
