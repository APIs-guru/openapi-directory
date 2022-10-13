package shared

type PatchServiceAccountRequest struct {
	ServiceAccount *ServiceAccount `json:"serviceAccount"`
	UpdateMask     *string         `json:"updateMask"`
}
