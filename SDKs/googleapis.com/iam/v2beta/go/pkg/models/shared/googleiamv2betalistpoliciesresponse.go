package shared

type GoogleIamV2betaListPoliciesResponse struct {
	NextPageToken *string                 `json:"nextPageToken"`
	Policies      []GoogleIamV2betaPolicy `json:"policies"`
}
