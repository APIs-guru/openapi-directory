package shared

// GoogleAppsDriveLabelsV2betaListLabelLocksResponse
// The response to a ListLabelLocksRequest.
type GoogleAppsDriveLabelsV2betaListLabelLocksResponse struct {
	LabelLocks    []GoogleAppsDriveLabelsV2betaLabelLock `json:"labelLocks,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
}
