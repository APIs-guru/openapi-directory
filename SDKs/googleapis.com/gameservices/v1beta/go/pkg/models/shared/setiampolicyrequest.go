package shared

type SetIamPolicyRequest struct {
	Policy     *Policy `json:"policy,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
