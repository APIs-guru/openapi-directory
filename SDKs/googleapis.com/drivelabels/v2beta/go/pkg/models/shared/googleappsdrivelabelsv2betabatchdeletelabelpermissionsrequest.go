package shared

// GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest
// Deletes one of more Label Permissions.
type GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest struct {
	Requests       []GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest `json:"requests,omitempty"`
	UseAdminAccess *bool                                                     `json:"useAdminAccess,omitempty"`
}
