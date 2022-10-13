package shared

type GoogleCloudDialogflowV2beta1ListParticipantsResponse struct {
	NextPageToken *string                                   `json:"nextPageToken"`
	Participants  []GoogleCloudDialogflowV2beta1Participant `json:"participants"`
}
