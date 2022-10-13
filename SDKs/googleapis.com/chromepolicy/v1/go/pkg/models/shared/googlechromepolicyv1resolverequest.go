package shared

type GoogleChromePolicyV1ResolveRequest struct {
	PageSize           *int32                               `json:"pageSize"`
	PageToken          *string                              `json:"pageToken"`
	PolicySchemaFilter *string                              `json:"policySchemaFilter"`
	PolicyTargetKey    *GoogleChromePolicyV1PolicyTargetKey `json:"policyTargetKey"`
}
