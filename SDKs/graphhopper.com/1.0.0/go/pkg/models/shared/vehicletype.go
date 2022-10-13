package shared

type VehicleTypeNetworkDataProviderEnum string

const (
	VehicleTypeNetworkDataProviderEnumOpenstreetmap VehicleTypeNetworkDataProviderEnum = "openstreetmap"
	VehicleTypeNetworkDataProviderEnumTomtom        VehicleTypeNetworkDataProviderEnum = "tomtom"
)

type VehicleType struct {
	Capacity            []int32                             `json:"capacity"`
	ConsiderTraffic     *bool                               `json:"consider_traffic"`
	CostPerActivation   *float64                            `json:"cost_per_activation"`
	CostPerMeter        *float64                            `json:"cost_per_meter"`
	CostPerSecond       *float64                            `json:"cost_per_second"`
	NetworkDataProvider *VehicleTypeNetworkDataProviderEnum `json:"network_data_provider"`
	Profile             map[string]interface{}              `json:"profile"`
	ServiceTimeFactor   *float64                            `json:"service_time_factor"`
	SpeedFactor         *float64                            `json:"speed_factor"`
	TypeID              string                              `json:"type_id"`
}
