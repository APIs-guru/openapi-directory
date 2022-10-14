package shared

type AddMatterPermissionsRequest struct {
	CcMe             *bool             `json:"ccMe,omitempty"`
	MatterPermission *MatterPermission `json:"matterPermission,omitempty"`
	SendEmails       *bool             `json:"sendEmails,omitempty"`
}
