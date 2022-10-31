package operations



type CreateNetworkApplianceStaticRoutePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkApplianceStaticRouteRequestBody struct {
    GatewayIP string `json:"gatewayIp"`
    Name string `json:"name"`
    Subnet string `json:"subnet"`
    
}

type CreateNetworkApplianceStaticRouteRequest struct {
    PathParams CreateNetworkApplianceStaticRoutePathParams 
    Request CreateNetworkApplianceStaticRouteRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkApplianceStaticRouteResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkApplianceStaticRoute201ApplicationJSONObject map[string]interface{} 
    
}

