package operations

import (
"openapi/pkg/models/shared")
var CreatePaymentMethodServers = []string{
	"https://api.linode.com/v4",
}

type CreatePaymentMethodRequestBodyData struct {
    CardNumber *string `json:"card_number,omitempty"`
    Cvv *string `json:"cvv,omitempty"`
    ExpiryMonth *int64 `json:"expiry_month,omitempty"`
    ExpiryYear *int64 `json:"expiry_year,omitempty"`
    
}

type CreatePaymentMethodRequestBody struct {
    Data CreatePaymentMethodRequestBodyData `json:"data"`
    IsDefault bool `json:"is_default"`
    Type shared.TypeEnum `json:"type"`
    
}

type CreatePaymentMethodSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type CreatePaymentMethodSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreatePaymentMethodSecurity struct {
    Option1 *CreatePaymentMethodSecurityOption1 `security:"option"`
    Option2 *CreatePaymentMethodSecurityOption2 `security:"option"`
    
}

type CreatePaymentMethodRequest struct {
    ServerURL *string 
    Request CreatePaymentMethodRequestBody `request:"mediaType=application/json"`
    Security CreatePaymentMethodSecurity 
    
}

type CreatePaymentMethodDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type CreatePaymentMethodResponse struct {
    ContentType string 
    StatusCode int64 
    CreatePaymentMethod200ApplicationJSONObject map[string]interface{} 
    CreatePaymentMethodDefaultApplicationJSONObject *CreatePaymentMethodDefaultApplicationJSON 
    
}

