package operations

type GetLoadBalancerTypesQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

// GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly
// Hourly costs for a Resource in this Location
type GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

// GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly
// Monthly costs for a Resource in this Location
type GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly struct {
	Gross string `json:"gross"`
	Net   string `json:"net"`
}

type GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices struct {
	Location     string                                                                    `json:"location"`
	PriceHourly  GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceHourly  `json:"price_hourly"`
	PriceMonthly GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPricesPriceMonthly `json:"price_monthly"`
}

type GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes struct {
	Deprecated              string                                                          `json:"deprecated"`
	Description             string                                                          `json:"description"`
	ID                      float64                                                         `json:"id"`
	MaxAssignedCertificates float64                                                         `json:"max_assigned_certificates"`
	MaxConnections          float64                                                         `json:"max_connections"`
	MaxServices             float64                                                         `json:"max_services"`
	MaxTargets              float64                                                         `json:"max_targets"`
	Name                    string                                                          `json:"name"`
	Prices                  []GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypesPrices `json:"prices"`
}

type GetLoadBalancerTypes200ApplicationJSON struct {
	LoadBalancerTypes []GetLoadBalancerTypes200ApplicationJSONLoadBalancerTypes `json:"load_balancer_types"`
}

type GetLoadBalancerTypesRequest struct {
	QueryParams GetLoadBalancerTypesQueryParams
}

type GetLoadBalancerTypesResponse struct {
	ContentType                                  string
	GetLoadBalancerTypes200ApplicationJSONObject *GetLoadBalancerTypes200ApplicationJSON
	StatusCode                                   int64
}
