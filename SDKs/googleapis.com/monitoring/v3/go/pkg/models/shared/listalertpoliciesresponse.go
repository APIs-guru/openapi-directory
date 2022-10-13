package shared

type ListAlertPoliciesResponse struct {
	AlertPolicies []AlertPolicy `json:"alertPolicies"`
	NextPageToken *string       `json:"nextPageToken"`
	TotalSize     *int32        `json:"totalSize"`
}
