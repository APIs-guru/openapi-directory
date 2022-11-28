package shared

// UpdateAvailabilityRequest
// The request to update availability.
type UpdateAvailabilityRequest struct {
	Availabilities []Availability `json:"availabilities,omitempty"`
}
