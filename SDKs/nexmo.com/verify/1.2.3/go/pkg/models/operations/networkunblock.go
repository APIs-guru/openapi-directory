package operations

import (
"openapi/pkg/models/shared")

type NetworkUnblockRequest struct {
    Request shared.NetworkUnblock `request:"mediaType=application/json"`
    
}

type NetworkUnblockResponse struct {
    ContentType string 
    ErrorThrottled *shared.ErrorThrottled 
    StatusCode int64 
    NetworkUnblockResponseForbidden *shared.NetworkUnblockResponseForbidden 
    NetworkUnblockResponseNotFound *shared.NetworkUnblockResponseNotFound 
    NetworkUnblockResponseOk *shared.NetworkUnblockResponseOk 
    NetworkUnblock422ApplicationJSONOneOf *interface{} 
    
}

