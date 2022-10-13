package shared

type GoogleAppsDriveLabelsV2betaListLabelsResponse struct {
	Labels        []GoogleAppsDriveLabelsV2betaLabel `json:"labels"`
	NextPageToken *string                            `json:"nextPageToken"`
}
