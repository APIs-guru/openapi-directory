package operations

import (
"openapi/pkg/models/shared")

type TopOndQueryParams struct {
    Catalogues *string `queryParam:"style=form,explode=true,name=catalogues"`
    Origin *string `queryParam:"style=form,explode=true,name=origin"`
    
}

type TopOndHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type TopOndSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type TopOndRequest struct {
    QueryParams TopOndQueryParams 
    Headers TopOndHeaders 
    Security TopOndSecurity 
    
}

type TopOndResponse struct {
    ContentType string 
    StatusCode int64 
    TopOnd200ApplicationJSONString *string 
    
}

