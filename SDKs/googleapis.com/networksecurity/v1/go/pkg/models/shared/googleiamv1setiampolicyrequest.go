package shared

type GoogleIamV1SetIamPolicyRequest struct {
	Policy     *GoogleIamV1Policy `json:"policy"`
	UpdateMask *string            `json:"updateMask"`
}
