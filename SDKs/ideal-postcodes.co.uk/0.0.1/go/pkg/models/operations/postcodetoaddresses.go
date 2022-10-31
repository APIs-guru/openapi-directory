package operations

import (
"openapi/pkg/models/shared")

type PostcodeToAddressesPathParams struct {
    Postcode string `pathParam:"style=simple,explode=false,name=postcode"`
    
}

type PostcodeToAddressesQueryParams struct {
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Licensee *string `queryParam:"style=form,explode=true,name=licensee"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    
}

type PostcodeToAddressesSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostcodeToAddressesRequest struct {
    PathParams PostcodeToAddressesPathParams 
    QueryParams PostcodeToAddressesQueryParams 
    Security PostcodeToAddressesSecurity 
    
}

type PostcodeToAddressesResponse struct {
    AddressLookupResponseSchema *shared.AddressLookupResponseSchema 
    ContentType string 
    ErrorResponseSchema *shared.ErrorResponseSchema 
    PostcodeToAddressResponseSchema *shared.PostcodeToAddressResponseSchema 
    StatusCode int64 
    
}

