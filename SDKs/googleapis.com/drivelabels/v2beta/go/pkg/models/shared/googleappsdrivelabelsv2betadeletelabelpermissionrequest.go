package shared

// GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest
// Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
type GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest struct {
	Name           *string `json:"name,omitempty"`
	UseAdminAccess *bool   `json:"useAdminAccess,omitempty"`
}
