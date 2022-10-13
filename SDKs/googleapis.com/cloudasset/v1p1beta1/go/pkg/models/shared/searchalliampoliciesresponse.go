package shared

type SearchAllIamPoliciesResponse struct {
	NextPageToken *string                 `json:"nextPageToken"`
	Results       []IamPolicySearchResult `json:"results"`
}
