package shared

type UpdateAvailabilityRequest struct {
	Availabilities []Availability `json:"availabilities"`
}
