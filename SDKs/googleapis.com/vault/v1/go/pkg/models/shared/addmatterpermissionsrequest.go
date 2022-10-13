package shared

type AddMatterPermissionsRequest struct {
	CcMe             *bool             `json:"ccMe"`
	MatterPermission *MatterPermission `json:"matterPermission"`
	SendEmails       *bool             `json:"sendEmails"`
}
