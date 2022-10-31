package operations

import (
"openapi/pkg/models/shared")

type ForgotPasswordPinRequests struct {
    String *string `request:"mediaType=application/*+json"`
    String1 *string `request:"mediaType=application/json"`
    String2 *string `request:"mediaType=text/json"`
    
}

type ForgotPasswordPinRequest struct {
    Request *ForgotPasswordPinRequests 
    
}

type ForgotPasswordPinResponse struct {
    ContentType string 
    PinRedeemResult *shared.PinRedeemResult 
    StatusCode int64 
    
}

