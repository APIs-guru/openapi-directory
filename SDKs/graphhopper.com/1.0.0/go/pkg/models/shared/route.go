package shared

type Route struct {
	Activities      []Activity   `json:"activities"`
	CompletionTime  *int64       `json:"completion_time"`
	Distance        *int64       `json:"distance"`
	Points          []RoutePoint `json:"points"`
	PreparationTime *int64       `json:"preparation_time"`
	ServiceDuration *int64       `json:"service_duration"`
	TransportTime   *int64       `json:"transport_time"`
	VehicleID       *string      `json:"vehicle_id"`
	WaitingTime     *int64       `json:"waiting_time"`
}
