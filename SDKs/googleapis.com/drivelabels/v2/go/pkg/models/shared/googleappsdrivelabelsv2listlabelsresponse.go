package shared

// GoogleAppsDriveLabelsV2ListLabelsResponse
// Response for listing Labels.
type GoogleAppsDriveLabelsV2ListLabelsResponse struct {
	Labels        []GoogleAppsDriveLabelsV2Label `json:"labels,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
