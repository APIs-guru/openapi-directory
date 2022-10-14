package shared

type GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest struct {
	Requests       []GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest `json:"requests,omitempty"`
	UseAdminAccess *bool                                                     `json:"useAdminAccess,omitempty"`
}
