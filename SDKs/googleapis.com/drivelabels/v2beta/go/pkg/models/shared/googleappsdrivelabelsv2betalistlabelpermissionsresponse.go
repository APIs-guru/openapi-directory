package shared

type GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse struct {
	LabelPermissions []GoogleAppsDriveLabelsV2betaLabelPermission `json:"labelPermissions"`
	NextPageToken    *string                                      `json:"nextPageToken"`
}
