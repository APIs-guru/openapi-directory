package shared

type ListInstanceOsPoliciesCompliancesResponse struct {
	InstanceOsPoliciesCompliances []InstanceOsPoliciesCompliance `json:"instanceOsPoliciesCompliances,omitempty"`
	NextPageToken                 *string                        `json:"nextPageToken,omitempty"`
}
