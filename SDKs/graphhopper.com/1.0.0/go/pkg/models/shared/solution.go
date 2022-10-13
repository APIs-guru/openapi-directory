package shared

type SolutionUnassigned struct {
	Breaks    []string `json:"breaks"`
	Details   []Detail `json:"details"`
	Services  []string `json:"services"`
	Shipments []string `json:"shipments"`
}

type Solution struct {
	CompletionTime   *int64              `json:"completion_time"`
	Costs            *int32              `json:"costs"`
	Distance         *int32              `json:"distance"`
	MaxOperationTime *int64              `json:"max_operation_time"`
	NoUnassigned     *int32              `json:"no_unassigned"`
	NoVehicles       *int32              `json:"no_vehicles"`
	PreparationTime  *int64              `json:"preparation_time"`
	Routes           []Route             `json:"routes"`
	ServiceDuration  *int64              `json:"service_duration"`
	Time             *int64              `json:"time"`
	TransportTime    *int64              `json:"transport_time"`
	Unassigned       *SolutionUnassigned `json:"unassigned"`
	WaitingTime      *int64              `json:"waiting_time"`
}
