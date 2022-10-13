package shared

type ClearOrgPolicyRequest struct {
	Constraint *string `json:"constraint"`
	Etag       *string `json:"etag"`
}
