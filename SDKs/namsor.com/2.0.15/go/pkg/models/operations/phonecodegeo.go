package operations

import (
"openapi/pkg/models/shared")

type PhoneCodeGeoPathParams struct {
    CountryIso2 string `pathParam:"style=simple,explode=false,name=countryIso2"`
    FirstName string `pathParam:"style=simple,explode=false,name=firstName"`
    LastName string `pathParam:"style=simple,explode=false,name=lastName"`
    PhoneNumber string `pathParam:"style=simple,explode=false,name=phoneNumber"`
    
}

type PhoneCodeGeoSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PhoneCodeGeoRequest struct {
    PathParams PhoneCodeGeoPathParams 
    Security PhoneCodeGeoSecurity 
    
}

type PhoneCodeGeoResponse struct {
    ContentType string 
    FirstLastNamePhoneCodedOut *shared.FirstLastNamePhoneCodedOut 
    StatusCode int64 
    
}

