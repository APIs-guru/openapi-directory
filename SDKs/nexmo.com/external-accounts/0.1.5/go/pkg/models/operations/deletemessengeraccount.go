package operations

import (
"openapi/pkg/models/shared")

type DeleteMessengerAccountPathParams struct {
    ExternalID string `pathParam:"style=simple,explode=false,name=external_id"`
    
}

type DeleteMessengerAccountSecurityOption1 struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteMessengerAccountSecurityOption2 struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteMessengerAccountSecurity struct {
    Option1 *DeleteMessengerAccountSecurityOption1 `security:"option"`
    Option2 *DeleteMessengerAccountSecurityOption2 `security:"option"`
    
}

type DeleteMessengerAccountRequest struct {
    PathParams DeleteMessengerAccountPathParams 
    Security DeleteMessengerAccountSecurity 
    
}

type DeleteMessengerAccountResponse struct {
    FourHundredAndOneResponse *shared.FourHundredAndOneResponse 
    FourHundredAndThreeResponse *shared.FourHundredAndThreeResponse 
    ContentType string 
    StatusCode int64 
    
}

