package shared

type ListReservationTopicsResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Topics        []string `json:"topics"`
}
