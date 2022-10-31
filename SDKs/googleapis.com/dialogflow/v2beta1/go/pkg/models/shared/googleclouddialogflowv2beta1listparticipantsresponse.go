package shared

type GoogleCloudDialogflowV2beta1ListParticipantsResponse struct {
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
	Participants  []GoogleCloudDialogflowV2beta1Participant `json:"participants,omitempty"`
}
