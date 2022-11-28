package shared

// AddMatterPermissionsRequest
// Add an account with the permission specified. The role cannot be owner. If an account already has a role in the matter, the existing role is overwritten.
type AddMatterPermissionsRequest struct {
	CcMe             *bool             `json:"ccMe,omitempty"`
	MatterPermission *MatterPermission `json:"matterPermission,omitempty"`
	SendEmails       *bool             `json:"sendEmails,omitempty"`
}
