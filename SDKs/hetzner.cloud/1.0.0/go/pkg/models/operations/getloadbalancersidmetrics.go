package operations

type GetLoadBalancersIDMetricsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetLoadBalancersIDMetricsTypeEnum string

const (
	GetLoadBalancersIDMetricsTypeEnumOpenConnections      GetLoadBalancersIDMetricsTypeEnum = "open_connections"
	GetLoadBalancersIDMetricsTypeEnumConnectionsPerSecond GetLoadBalancersIDMetricsTypeEnum = "connections_per_second"
	GetLoadBalancersIDMetricsTypeEnumRequestsPerSecond    GetLoadBalancersIDMetricsTypeEnum = "requests_per_second"
	GetLoadBalancersIDMetricsTypeEnumBandwidth            GetLoadBalancersIDMetricsTypeEnum = "bandwidth"
)

type GetLoadBalancersIDMetricsQueryParams struct {
	End   string                            `queryParam:"style=form,explode=true,name=end"`
	Start string                            `queryParam:"style=form,explode=true,name=start"`
	Step  *string                           `queryParam:"style=form,explode=true,name=step"`
	Type  GetLoadBalancersIDMetricsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type GetLoadBalancersIDMetricsRequest struct {
	PathParams  GetLoadBalancersIDMetricsPathParams
	QueryParams GetLoadBalancersIDMetricsQueryParams
}

type GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries struct {
	Values [][]interface{} `json:"values"`
}

type GetLoadBalancersIDMetrics200ApplicationJSONMetrics struct {
	End        string                                                                  `json:"end"`
	Start      string                                                                  `json:"start"`
	Step       float64                                                                 `json:"step"`
	TimeSeries map[string]GetLoadBalancersIDMetrics200ApplicationJSONMetricsTimeSeries `json:"time_series"`
}

type GetLoadBalancersIDMetrics200ApplicationJSON struct {
	Metrics GetLoadBalancersIDMetrics200ApplicationJSONMetrics `json:"metrics"`
}

type GetLoadBalancersIDMetricsResponse struct {
	ContentType                                       string
	GetLoadBalancersIDMetrics200ApplicationJSONObject *GetLoadBalancersIDMetrics200ApplicationJSON
	StatusCode                                        int64
}
