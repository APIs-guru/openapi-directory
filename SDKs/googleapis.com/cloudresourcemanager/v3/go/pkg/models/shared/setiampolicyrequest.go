package shared

type SetIamPolicyRequest struct {
	Policy     *Policy `json:"policy"`
	UpdateMask *string `json:"updateMask"`
}
