package shared

// GoogleChromePolicyVersionsV1ResolveResponse
// Response message for getting the resolved policy value for a specific target.
type GoogleChromePolicyVersionsV1ResolveResponse struct {
	NextPageToken    *string                                      `json:"nextPageToken,omitempty"`
	ResolvedPolicies []GoogleChromePolicyVersionsV1ResolvedPolicy `json:"resolvedPolicies,omitempty"`
}
