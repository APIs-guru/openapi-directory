package shared

type GoogleAppsDriveLabelsV2betaListLabelsResponse struct {
	Labels        []GoogleAppsDriveLabelsV2betaLabel `json:"labels,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
