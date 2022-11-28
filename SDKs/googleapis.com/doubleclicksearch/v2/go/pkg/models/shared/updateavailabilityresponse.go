package shared

// UpdateAvailabilityResponse
// The response to a update availability request.
type UpdateAvailabilityResponse struct {
	Availabilities []Availability `json:"availabilities,omitempty"`
}
