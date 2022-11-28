package shared

// SearchAllIamPoliciesResponse
// Search all IAM policies response.
type SearchAllIamPoliciesResponse struct {
	NextPageToken *string                 `json:"nextPageToken,omitempty"`
	Results       []IamPolicySearchResult `json:"results,omitempty"`
}
