package operations

import (
"openapi/pkg/models/shared")

type CreateCreditCardSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreateCreditCardSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateCreditCardSecurity struct {
    Option1 *CreateCreditCardSecurityOption1 `security:"option"`
    Option2 *CreateCreditCardSecurityOption2 `security:"option"`
    
}

type CreateCreditCardRequest struct {
    Request shared.CreditCard `request:"mediaType=application/json"`
    Security CreateCreditCardSecurity 
    
}

type CreateCreditCardDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreateCreditCardResponse struct {
    ContentType string 
    StatusCode int64 
    CreateCreditCard200ApplicationJSONObject map[string]interface{} 
    CreateCreditCardDefaultApplicationJSONObject *CreateCreditCardDefaultApplicationJSON 
    
}

