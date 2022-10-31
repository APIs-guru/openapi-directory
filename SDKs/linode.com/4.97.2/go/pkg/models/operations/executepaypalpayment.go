package operations

import (
"openapi/pkg/models/shared")

type ExecutePayPalPaymentSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type ExecutePayPalPaymentSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type ExecutePayPalPaymentSecurity struct {
    Option1 *ExecutePayPalPaymentSecurityOption1 `security:"option"`
    Option2 *ExecutePayPalPaymentSecurityOption2 `security:"option"`
    
}

type ExecutePayPalPaymentRequest struct {
    Request shared.PayPalExecute `request:"mediaType=application/json"`
    Security ExecutePayPalPaymentSecurity 
    
}

type ExecutePayPalPaymentDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type ExecutePayPalPaymentResponse struct {
    ContentType string 
    StatusCode int64 
    ExecutePayPalPayment200ApplicationJSONObject map[string]interface{} 
    ExecutePayPalPaymentDefaultApplicationJSONObject *ExecutePayPalPaymentDefaultApplicationJSON 
    
}

