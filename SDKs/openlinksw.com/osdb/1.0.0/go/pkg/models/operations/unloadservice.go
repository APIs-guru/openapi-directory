package operations

import (
"openapi/pkg/models/shared")

type UnloadServicePathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type UnloadServiceRequest struct {
    PathParams UnloadServicePathParams 
    
}


type UnloadService200ApplicationJSONStatusEnum string

const (
    UnloadService200ApplicationJSONStatusEnumSuccess UnloadService200ApplicationJSONStatusEnum = "success"
)


type UnloadService200ApplicationJSON struct {
    API string `json:"api"`
    Method string `json:"method"`
    Response string `json:"response"`
    Status UnloadService200ApplicationJSONStatusEnum `json:"status"`
    
}

type UnloadServiceResponse struct {
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    UnloadService200ApplicationJSONObject *UnloadService200ApplicationJSON 
    
}

