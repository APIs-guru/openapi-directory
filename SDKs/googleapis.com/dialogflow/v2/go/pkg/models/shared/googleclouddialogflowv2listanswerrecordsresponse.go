package shared

type GoogleCloudDialogflowV2ListAnswerRecordsResponse struct {
	AnswerRecords []GoogleCloudDialogflowV2AnswerRecord `json:"answerRecords"`
	NextPageToken *string                               `json:"nextPageToken"`
}
