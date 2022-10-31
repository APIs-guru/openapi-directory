package shared

type GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse struct {
	AnswerRecords []GoogleCloudDialogflowV2beta1AnswerRecord `json:"answerRecords,omitempty"`
	NextPageToken *string                                    `json:"nextPageToken,omitempty"`
}
