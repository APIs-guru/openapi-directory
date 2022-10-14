package shared

type GoogleCloudDialogflowV2ListParticipantsResponse struct {
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
	Participants  []GoogleCloudDialogflowV2Participant `json:"participants,omitempty"`
}
