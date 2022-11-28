package shared

// GoogleCloudDialogflowV2beta1ListParticipantsResponse
// The response message for Participants.ListParticipants.
type GoogleCloudDialogflowV2beta1ListParticipantsResponse struct {
	NextPageToken *string                                   `json:"nextPageToken,omitempty"`
	Participants  []GoogleCloudDialogflowV2beta1Participant `json:"participants,omitempty"`
}
