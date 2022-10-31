package operations

import (
"openapi/pkg/models/shared")

type GetDomesticPaymentConsentsConsentIDPathParams struct {
    ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
    
}

type GetDomesticPaymentConsentsConsentIDHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetDomesticPaymentConsentsConsentIDSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetDomesticPaymentConsentsConsentIDRequest struct {
    PathParams GetDomesticPaymentConsentsConsentIDPathParams 
    Headers GetDomesticPaymentConsentsConsentIDHeaders 
    Security GetDomesticPaymentConsentsConsentIDSecurity 
    
}

type GetDomesticPaymentConsentsConsentIDResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWriteDomesticConsentResponse5 *shared.ObWriteDomesticConsentResponse5 
    StatusCode int64 
    
}

