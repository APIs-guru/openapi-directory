package shared

type GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse struct {
	AnswerRecords []GoogleCloudDialogflowV2beta1AnswerRecord `json:"answerRecords"`
	NextPageToken *string                                    `json:"nextPageToken"`
}
