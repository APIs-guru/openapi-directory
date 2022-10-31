package operations

import (
"openapi/pkg/models/shared")

type GetEventsQueryParams struct {
    DateFrom *string `queryParam:"style=form,explode=true,name=date_from"`
    DateTo *string `queryParam:"style=form,explode=true,name=date_to"`
    EventType *shared.EventTypesEnum `queryParam:"style=form,explode=true,name=event_type"`
    Page *string `queryParam:"style=form,explode=true,name=page"`
    SearchText *string `queryParam:"style=form,explode=true,name=search_text"`
    Size *int64 `queryParam:"style=form,explode=true,name=size"`
    
}

type GetEventsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type GetEventsRequest struct {
    QueryParams GetEventsQueryParams 
    Security GetEventsSecurity 
    
}

type GetEventsResponse struct {
    AuditResp *shared.AuditResp 
    ContentType string 
    ErrorForbidden *shared.ErrorForbidden 
    ErrorNotFound *shared.ErrorNotFound 
    ErrorUnauthorized *shared.ErrorUnauthorized 
    StatusCode int64 
    
}

