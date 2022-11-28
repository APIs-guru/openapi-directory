package shared

// GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse
// Response for listing the permissions on a Label.
type GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse struct {
	LabelPermissions []GoogleAppsDriveLabelsV2betaLabelPermission `json:"labelPermissions,omitempty"`
	NextPageToken    *string                                      `json:"nextPageToken,omitempty"`
}
