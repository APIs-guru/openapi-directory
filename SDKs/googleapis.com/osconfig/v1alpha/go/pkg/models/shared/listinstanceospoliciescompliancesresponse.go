package shared

type ListInstanceOsPoliciesCompliancesResponse struct {
	InstanceOsPoliciesCompliances []InstanceOsPoliciesCompliance `json:"instanceOsPoliciesCompliances"`
	NextPageToken                 *string                        `json:"nextPageToken"`
}
