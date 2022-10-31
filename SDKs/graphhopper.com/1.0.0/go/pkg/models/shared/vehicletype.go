package shared




type VehicleTypeNetworkDataProviderEnum string

const (
    VehicleTypeNetworkDataProviderEnumOpenstreetmap VehicleTypeNetworkDataProviderEnum = "openstreetmap"
VehicleTypeNetworkDataProviderEnumTomtom VehicleTypeNetworkDataProviderEnum = "tomtom"
)


type VehicleType struct {
    Capacity []int32 `json:"capacity,omitempty"`
    ConsiderTraffic *bool `json:"consider_traffic,omitempty"`
    CostPerActivation *float64 `json:"cost_per_activation,omitempty"`
    CostPerMeter *float64 `json:"cost_per_meter,omitempty"`
    CostPerSecond *float64 `json:"cost_per_second,omitempty"`
    NetworkDataProvider *VehicleTypeNetworkDataProviderEnum `json:"network_data_provider,omitempty"`
    Profile map[string]interface{} `json:"profile,omitempty"`
    ServiceTimeFactor *float64 `json:"service_time_factor,omitempty"`
    SpeedFactor *float64 `json:"speed_factor,omitempty"`
    TypeID string `json:"type_id"`
    
}

