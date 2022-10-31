package shared

type GoogleCloudOrgpolicyV2ListPoliciesResponse struct {
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
	Policies      []GoogleCloudOrgpolicyV2Policy `json:"policies,omitempty"`
}
