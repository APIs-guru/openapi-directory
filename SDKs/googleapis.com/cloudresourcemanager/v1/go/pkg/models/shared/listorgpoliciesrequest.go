package shared

type ListOrgPoliciesRequest struct {
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
}
