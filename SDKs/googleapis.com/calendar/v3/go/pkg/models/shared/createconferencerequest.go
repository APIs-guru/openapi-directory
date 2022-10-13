package shared

type CreateConferenceRequest struct {
	ConferenceSolutionKey *ConferenceSolutionKey   `json:"conferenceSolutionKey"`
	RequestID             *string                  `json:"requestId"`
	Status                *ConferenceRequestStatus `json:"status"`
}
