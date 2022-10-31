package operations

import (
"openapi/pkg/models/shared")

type BaggageTripAndContactPathParams struct {
    SearchID string `pathParam:"style=simple,explode=false,name=searchID"`
    
}

type BaggageTripAndContactHeaders struct {
    Accept string `header:"style=simple,explode=false,name=Accept"`
    
}

type BaggageTripAndContactSecurity struct {
    Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
    
}

type BaggageTripAndContactRequest struct {
    PathParams BaggageTripAndContactPathParams 
    Headers BaggageTripAndContactHeaders 
    Security BaggageTripAndContactSecurity 
    
}

type BaggageTripAndContactResponse struct {
    BaggageTripAndContact200ApplicationJSONString *string 
    ContentType string 
    StatusCode int64 
    
}

