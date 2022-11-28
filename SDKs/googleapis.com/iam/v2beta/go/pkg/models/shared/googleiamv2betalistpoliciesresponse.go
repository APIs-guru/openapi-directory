package shared

// GoogleIamV2betaListPoliciesResponse
// Response message for `ListPolicies`.
type GoogleIamV2betaListPoliciesResponse struct {
	NextPageToken *string                 `json:"nextPageToken,omitempty"`
	Policies      []GoogleIamV2betaPolicy `json:"policies,omitempty"`
}
