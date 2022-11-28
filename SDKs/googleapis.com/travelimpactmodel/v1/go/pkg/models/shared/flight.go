package shared

// Flight
// All details related to a single request item for a direct flight emission estimates.
type Flight struct {
	DepartureDate        *Date   `json:"departureDate,omitempty"`
	Destination          *string `json:"destination,omitempty"`
	FlightNumber         *int32  `json:"flightNumber,omitempty"`
	OperatingCarrierCode *string `json:"operatingCarrierCode,omitempty"`
	Origin               *string `json:"origin,omitempty"`
}
