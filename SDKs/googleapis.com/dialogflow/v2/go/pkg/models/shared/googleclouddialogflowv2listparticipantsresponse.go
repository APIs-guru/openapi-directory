package shared

type GoogleCloudDialogflowV2ListParticipantsResponse struct {
	NextPageToken *string                              `json:"nextPageToken"`
	Participants  []GoogleCloudDialogflowV2Participant `json:"participants"`
}
