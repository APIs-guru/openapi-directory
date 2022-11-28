package shared

// ListAvailableOrgPolicyConstraintsRequest
// The request sent to the `ListAvailableOrgPolicyConstraints` method on the project, folder, or organization.
type ListAvailableOrgPolicyConstraintsRequest struct {
	PageSize  *int32  `json:"pageSize,omitempty"`
	PageToken *string `json:"pageToken,omitempty"`
}
