package shared

type ListAvailableOrgPolicyConstraintsRequest struct {
	PageSize  *int32  `json:"pageSize"`
	PageToken *string `json:"pageToken"`
}
