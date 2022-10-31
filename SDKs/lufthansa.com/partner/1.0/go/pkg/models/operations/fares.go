package operations

import (
"openapi/pkg/models/shared")

type FaresQueryParams struct {
    Carriers string `queryParam:"style=form,explode=true,name=carriers"`
    Catalogues string `queryParam:"style=form,explode=true,name=catalogues"`
    FareTypes *string `queryParam:"style=form,explode=true,name=fare-types"`
    Segments string `queryParam:"style=form,explode=true,name=segments"`
    Travelers *string `queryParam:"style=form,explode=true,name=travelers"`
    
}

type FaresHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type FaresSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type FaresRequest struct {
    QueryParams FaresQueryParams 
    Headers FaresHeaders 
    Security FaresSecurity 
    
}

type FaresResponse struct {
    ContentType string 
    Fares200ApplicationJSONString *string 
    StatusCode int64 
    
}

