package shared

// GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse
// Response message for AnswerRecords.ListAnswerRecords.
type GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse struct {
	AnswerRecords []GoogleCloudDialogflowV2beta1AnswerRecord `json:"answerRecords,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
