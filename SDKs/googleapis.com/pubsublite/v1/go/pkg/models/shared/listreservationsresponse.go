package shared



type ListReservationsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Reservations []Reservation `json:"reservations,omitempty"`
    
}

