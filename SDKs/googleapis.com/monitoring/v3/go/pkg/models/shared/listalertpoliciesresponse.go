package shared

// ListAlertPoliciesResponse
// The protocol for the ListAlertPolicies response.
type ListAlertPoliciesResponse struct {
	AlertPolicies []AlertPolicy `json:"alertPolicies,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	TotalSize     *int32        `json:"totalSize,omitempty"`
}
