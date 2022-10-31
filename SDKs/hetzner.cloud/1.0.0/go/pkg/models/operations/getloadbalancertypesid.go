package operations



type GetLoadBalancerTypesIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetLoadBalancerTypesIDRequest struct {
    PathParams GetLoadBalancerTypesIDPathParams 
    
}

type GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly struct {
    Gross string `json:"gross"`
    Net string `json:"net"`
    
}

type GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly struct {
    Gross string `json:"gross"`
    Net string `json:"net"`
    
}

type GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices struct {
    Location string `json:"location"`
    PriceHourly GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceHourly `json:"price_hourly"`
    PriceMonthly GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePricesPriceMonthly `json:"price_monthly"`
    
}

type GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType struct {
    Deprecated string `json:"deprecated"`
    Description string `json:"description"`
    ID float64 `json:"id"`
    MaxAssignedCertificates float64 `json:"max_assigned_certificates"`
    MaxConnections float64 `json:"max_connections"`
    MaxServices float64 `json:"max_services"`
    MaxTargets float64 `json:"max_targets"`
    Name string `json:"name"`
    Prices []GetLoadBalancerTypesID200ApplicationJSONLoadBalancerTypePrices `json:"prices"`
    
}

type GetLoadBalancerTypesID200ApplicationJSON struct {
    LoadBalancerType *GetLoadBalancerTypesID200ApplicationJSONLoadBalancerType `json:"load_balancer_type,omitempty"`
    
}

type GetLoadBalancerTypesIDResponse struct {
    ContentType string 
    GetLoadBalancerTypesID200ApplicationJSONObject *GetLoadBalancerTypesID200ApplicationJSON 
    StatusCode int64 
    
}

