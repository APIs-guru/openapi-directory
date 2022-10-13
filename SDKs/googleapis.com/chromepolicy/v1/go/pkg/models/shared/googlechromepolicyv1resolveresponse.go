package shared

type GoogleChromePolicyV1ResolveResponse struct {
	NextPageToken    *string                              `json:"nextPageToken"`
	ResolvedPolicies []GoogleChromePolicyV1ResolvedPolicy `json:"resolvedPolicies"`
}
