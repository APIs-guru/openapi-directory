package shared



type GoogleChromePolicyVersionsV1ResolveRequest struct {
    PageSize *int32 `json:"pageSize,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    PolicySchemaFilter *string `json:"policySchemaFilter,omitempty"`
    PolicyTargetKey *GoogleChromePolicyVersionsV1PolicyTargetKey `json:"policyTargetKey,omitempty"`
    
}

