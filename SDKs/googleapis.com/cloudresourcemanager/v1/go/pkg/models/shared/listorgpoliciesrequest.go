package shared

// ListOrgPoliciesRequest
// The request sent to the ListOrgPolicies method.
type ListOrgPoliciesRequest struct {
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
}
