package shared

type SolutionUnassigned struct {
	Breaks    []string `json:"breaks,omitempty"`
	Details   []Detail `json:"details,omitempty"`
	Services  []string `json:"services,omitempty"`
	Shipments []string `json:"shipments,omitempty"`
}

// Solution
// Only available if status field indicates `finished`.
type Solution struct {
	CompletionTime   *int64              `json:"completion_time,omitempty"`
	Costs            *int32              `json:"costs,omitempty"`
	Distance         *int32              `json:"distance,omitempty"`
	MaxOperationTime *int64              `json:"max_operation_time,omitempty"`
	NoUnassigned     *int32              `json:"no_unassigned,omitempty"`
	NoVehicles       *int32              `json:"no_vehicles,omitempty"`
	PreparationTime  *int64              `json:"preparation_time,omitempty"`
	Routes           []Route             `json:"routes,omitempty"`
	ServiceDuration  *int64              `json:"service_duration,omitempty"`
	Time             *int64              `json:"time,omitempty"`
	TransportTime    *int64              `json:"transport_time,omitempty"`
	Unassigned       *SolutionUnassigned `json:"unassigned,omitempty"`
	WaitingTime      *int64              `json:"waiting_time,omitempty"`
}
