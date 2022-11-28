package shared

// GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest
// Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
type GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest struct {
	LabelPermission *GoogleAppsDriveLabelsV2betaLabelPermission `json:"labelPermission,omitempty"`
	Parent          *string                                     `json:"parent,omitempty"`
	UseAdminAccess  *bool                                       `json:"useAdminAccess,omitempty"`
}
