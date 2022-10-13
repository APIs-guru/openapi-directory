package shared

type GoogleAppsDriveLabelsV2ListLabelsResponse struct {
	Labels        []GoogleAppsDriveLabelsV2Label `json:"labels"`
	NextPageToken *string                        `json:"nextPageToken"`
}
