package shared

type GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest struct {
	LabelPermission *GoogleAppsDriveLabelsV2betaLabelPermission `json:"labelPermission,omitempty"`
	Parent          *string                                     `json:"parent,omitempty"`
	UseAdminAccess  *bool                                       `json:"useAdminAccess,omitempty"`
}
