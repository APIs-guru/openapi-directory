package shared

// GoogleChromePolicyVersionsV1ResolveRequest
// Request message for getting the resolved policy value for a specific target.
type GoogleChromePolicyVersionsV1ResolveRequest struct {
	PageSize           *int32                                       `json:"pageSize,omitempty"`
	PageToken          *string                                      `json:"pageToken,omitempty"`
	PolicySchemaFilter *string                                      `json:"policySchemaFilter,omitempty"`
	PolicyTargetKey    *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
}
