package shared

type GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest struct {
	Requests       []GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest `json:"requests"`
	UseAdminAccess *bool                                                     `json:"useAdminAccess"`
}
