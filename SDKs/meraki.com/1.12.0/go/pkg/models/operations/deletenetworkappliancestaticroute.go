package operations



type DeleteNetworkApplianceStaticRoutePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    StaticRouteID string `pathParam:"style=simple,explode=false,name=staticRouteId"`
    
}

type DeleteNetworkApplianceStaticRouteRequest struct {
    PathParams DeleteNetworkApplianceStaticRoutePathParams 
    
}

type DeleteNetworkApplianceStaticRouteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

