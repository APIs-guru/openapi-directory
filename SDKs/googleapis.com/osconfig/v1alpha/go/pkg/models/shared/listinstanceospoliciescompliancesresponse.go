package shared

// ListInstanceOsPoliciesCompliancesResponse
// A response message for listing OS policies compliance data for all Compute Engine VMs in the given location.
type ListInstanceOsPoliciesCompliancesResponse struct {
	InstanceOsPoliciesCompliances []InstanceOsPoliciesCompliance `json:"instanceOsPoliciesCompliances,omitempty"`
	NextPageToken                 *string                        `json:"nextPageToken,omitempty"`
}
