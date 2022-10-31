package operations

import (
"openapi/pkg/models/shared")

type PostRouteRequest struct {
    Request *shared.RouteRequest `request:"mediaType=application/json"`
    
}

type PostRouteResponse struct {
    ContentType string 
    GhError *shared.GhError 
    Headers map[string][]string 
    RouteResponse *shared.RouteResponse 
    StatusCode int64 
    
}

