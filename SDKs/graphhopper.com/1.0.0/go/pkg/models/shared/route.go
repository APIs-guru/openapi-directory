package shared

type Route struct {
	Activities      []Activity   `json:"activities,omitempty"`
	CompletionTime  *int64       `json:"completion_time,omitempty"`
	Distance        *int64       `json:"distance,omitempty"`
	Points          []RoutePoint `json:"points,omitempty"`
	PreparationTime *int64       `json:"preparation_time,omitempty"`
	ServiceDuration *int64       `json:"service_duration,omitempty"`
	TransportTime   *int64       `json:"transport_time,omitempty"`
	VehicleID       *string      `json:"vehicle_id,omitempty"`
	WaitingTime     *int64       `json:"waiting_time,omitempty"`
}
