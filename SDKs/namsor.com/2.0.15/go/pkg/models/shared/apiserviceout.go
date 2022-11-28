package shared

// APIServiceOut
// List of API Services
type APIServiceOut struct {
	CostInUnits  *int32  `json:"costInUnits,omitempty"`
	ServiceGroup *string `json:"serviceGroup,omitempty"`
	ServiceName  *string `json:"serviceName,omitempty"`
}
