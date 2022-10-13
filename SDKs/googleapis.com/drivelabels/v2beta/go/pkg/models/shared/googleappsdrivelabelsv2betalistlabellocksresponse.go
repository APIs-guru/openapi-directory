package shared

type GoogleAppsDriveLabelsV2betaListLabelLocksResponse struct {
	LabelLocks    []GoogleAppsDriveLabelsV2betaLabelLock `json:"labelLocks"`
	NextPageToken *string                                `json:"nextPageToken"`
}
