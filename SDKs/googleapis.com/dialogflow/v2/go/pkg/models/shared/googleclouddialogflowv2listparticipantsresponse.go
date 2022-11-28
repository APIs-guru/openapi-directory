package shared

// GoogleCloudDialogflowV2ListParticipantsResponse
// The response message for Participants.ListParticipants.
type GoogleCloudDialogflowV2ListParticipantsResponse struct {
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
	Participants  []GoogleCloudDialogflowV2Participant `json:"participants,omitempty"`
}
