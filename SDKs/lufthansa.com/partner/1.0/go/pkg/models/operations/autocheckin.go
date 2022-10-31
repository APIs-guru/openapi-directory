package operations

import (
"openapi/pkg/models/shared")

type AutoCheckInPathParams struct {
    Ticketnumber string `pathParam:"style=simple,explode=false,name=ticketnumber"`
    
}

type AutoCheckInQueryParams struct {
    EmailAddress string `queryParam:"style=form,explode=true,name=emailAddress"`
    
}

type AutoCheckInHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type AutoCheckInSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type AutoCheckInRequest struct {
    PathParams AutoCheckInPathParams 
    QueryParams AutoCheckInQueryParams 
    Headers AutoCheckInHeaders 
    Security AutoCheckInSecurity 
    
}

type AutoCheckInResponse struct {
    AutoCheckIn200ApplicationJSONString *string 
    ContentType string 
    StatusCode int64 
    
}

