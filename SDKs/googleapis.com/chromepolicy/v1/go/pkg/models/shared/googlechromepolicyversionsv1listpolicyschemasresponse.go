package shared

type GoogleChromePolicyVersionsV1ListPolicySchemasResponse struct {
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
	PolicySchemas []GoogleChromePolicyVersionsV1PolicySchema `json:"policySchemas,omitempty"`
}
