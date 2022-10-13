package shared

type GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest struct {
	Requests       []GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest `json:"requests"`
	UseAdminAccess *bool                                                     `json:"useAdminAccess"`
}
