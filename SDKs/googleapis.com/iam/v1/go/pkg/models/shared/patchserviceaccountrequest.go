package shared

type PatchServiceAccountRequest struct {
	ServiceAccount *ServiceAccount `json:"serviceAccount,omitempty"`
	UpdateMask     *string         `json:"updateMask,omitempty"`
}
