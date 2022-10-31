package operations

import (
"openapi/pkg/models/shared")

type AddressAutocompleteQueryParams struct {
    Licensee *string `queryParam:"style=form,explode=true,name=licensee"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    PostcodeOutward *string `queryParam:"style=form,explode=true,name=postcode_outward"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type AddressAutocompleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
    UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
    
}

type AddressAutocompleteRequest struct {
    QueryParams AddressAutocompleteQueryParams 
    Security AddressAutocompleteSecurity 
    
}

type AddressAutocompleteResponse struct {
    AddressAutocompleteResponseSchema *shared.AddressAutocompleteResponseSchema 
    AddressLookupResponseSchema *shared.AddressLookupResponseSchema 
    ContentType string 
    StatusCode int64 
    
}

