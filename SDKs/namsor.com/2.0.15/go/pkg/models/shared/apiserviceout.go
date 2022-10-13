package shared

type APIServiceOut struct {
	CostInUnits  *int32  `json:"costInUnits"`
	ServiceGroup *string `json:"serviceGroup"`
	ServiceName  *string `json:"serviceName"`
}
