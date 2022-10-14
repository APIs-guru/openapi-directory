package shared

type GoogleChromePolicyVersionsV1ResolveResponse struct {
	NextPageToken    *string                                      `json:"nextPageToken,omitempty"`
	ResolvedPolicies []GoogleChromePolicyVersionsV1ResolvedPolicy `json:"resolvedPolicies,omitempty"`
}
