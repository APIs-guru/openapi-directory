package shared

type GoogleChromePolicyVersionsV1ListPolicySchemasResponse struct {
	NextPageToken *string                                    `json:"nextPageToken"`
	PolicySchemas []GoogleChromePolicyVersionsV1PolicySchema `json:"policySchemas"`
}
