package shared

// GoogleChromePolicyVersionsV1ListPolicySchemasResponse
// Response message for listing policy schemas that match a filter.
type GoogleChromePolicyVersionsV1ListPolicySchemasResponse struct {
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
	PolicySchemas []GoogleChromePolicyVersionsV1PolicySchema `json:"policySchemas,omitempty"`
}
