package shared

// GoogleAppsDriveLabelsV2betaListLabelsResponse
// Response for listing Labels.
type GoogleAppsDriveLabelsV2betaListLabelsResponse struct {
	Labels        []GoogleAppsDriveLabelsV2betaLabel `json:"labels,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
