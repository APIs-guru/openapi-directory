package operations

import (
"openapi/pkg/models/shared")

type LookupUdprnPathParams struct {
    Udprn string `pathParam:"style=simple,explode=false,name=udprn"`
    
}

type LookupUdprnQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Licensee *string `queryParam:"style=form,explode=true,name=licensee"`
    
}

type LookupUdprnSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
    
}

type LookupUdprnRequest struct {
    PathParams LookupUdprnPathParams 
    QueryParams LookupUdprnQueryParams 
    Security LookupUdprnSecurity 
    
}

type LookupUdprnResponse struct {
    AddressLookupResponseSchema *shared.AddressLookupResponseSchema 
    ContentType string 
    ErrorResponseSchema *shared.ErrorResponseSchema 
    StatusCode int64 
    
}

