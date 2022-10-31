package operations

import (
"openapi/pkg/models/shared")

type GetEventsOptionsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetEventsOptionsRequest struct {
    Security GetEventsOptionsSecurity 
    
}

type GetEventsOptionsResponse struct {
    AuditEventTypesResp *shared.AuditEventTypesResp 
    ContentType string 
    ErrorForbidden *shared.ErrorForbidden 
    ErrorUnauthorized *shared.ErrorUnauthorized 
    NoContent *shared.NoContent 
    StatusCode int64 
    
}

