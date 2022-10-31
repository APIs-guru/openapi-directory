package shared

type SearchAllIamPoliciesResponse struct {
	NextPageToken *string                 `json:"nextPageToken,omitempty"`
	Results       []IamPolicySearchResult `json:"results,omitempty"`
}
