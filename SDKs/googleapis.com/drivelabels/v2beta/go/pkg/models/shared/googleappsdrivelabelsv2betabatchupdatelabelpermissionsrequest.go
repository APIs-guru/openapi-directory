package shared

// GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest
// Updates one or more Label Permissions.
type GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest struct {
	Requests       []GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest `json:"requests,omitempty"`
	UseAdminAccess *bool                                                     `json:"useAdminAccess,omitempty"`
}
