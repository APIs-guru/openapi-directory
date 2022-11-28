package shared

// GoogleCloudDialogflowV2ListAnswerRecordsResponse
// Response message for AnswerRecords.ListAnswerRecords.
type GoogleCloudDialogflowV2ListAnswerRecordsResponse struct {
	AnswerRecords []GoogleCloudDialogflowV2AnswerRecord `json:"answerRecords,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
