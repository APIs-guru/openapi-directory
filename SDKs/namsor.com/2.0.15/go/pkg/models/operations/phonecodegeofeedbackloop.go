package operations

import (
"openapi/pkg/models/shared")

type PhoneCodeGeoFeedbackLoopPathParams struct {
    CountryIso2 string `pathParam:"style=simple,explode=false,name=countryIso2"`
    FirstName string `pathParam:"style=simple,explode=false,name=firstName"`
    LastName string `pathParam:"style=simple,explode=false,name=lastName"`
    PhoneNumber string `pathParam:"style=simple,explode=false,name=phoneNumber"`
    PhoneNumberE164 string `pathParam:"style=simple,explode=false,name=phoneNumberE164"`
    
}

type PhoneCodeGeoFeedbackLoopSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PhoneCodeGeoFeedbackLoopRequest struct {
    PathParams PhoneCodeGeoFeedbackLoopPathParams 
    Security PhoneCodeGeoFeedbackLoopSecurity 
    
}

type PhoneCodeGeoFeedbackLoopResponse struct {
    ContentType string 
    FirstLastNamePhoneCodedOut *shared.FirstLastNamePhoneCodedOut 
    StatusCode int64 
    
}

