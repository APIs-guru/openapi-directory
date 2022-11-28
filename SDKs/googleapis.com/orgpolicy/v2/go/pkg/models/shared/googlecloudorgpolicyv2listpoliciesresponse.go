package shared

// GoogleCloudOrgpolicyV2ListPoliciesResponse
// The response returned from the ListPolicies method. It will be empty if no `Policies` are set on the resource.
type GoogleCloudOrgpolicyV2ListPoliciesResponse struct {
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
	Policies      []GoogleCloudOrgpolicyV2Policy `json:"policies,omitempty"`
}
