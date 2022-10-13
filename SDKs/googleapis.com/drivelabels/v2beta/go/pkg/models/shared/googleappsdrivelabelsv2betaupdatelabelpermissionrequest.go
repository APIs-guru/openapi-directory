package shared

type GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest struct {
	LabelPermission *GoogleAppsDriveLabelsV2betaLabelPermission `json:"labelPermission"`
	Parent          *string                                     `json:"parent"`
	UseAdminAccess  *bool                                       `json:"useAdminAccess"`
}
