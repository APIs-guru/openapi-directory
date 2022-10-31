package operations

import (
"openapi/pkg/models/shared")

type GetInternationalScheduledPaymentConsentsConsentIDPathParams struct {
    ConsentID string `pathParam:"style=simple,explode=false,name=ConsentId"`
    
}

type GetInternationalScheduledPaymentConsentsConsentIDHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetInternationalScheduledPaymentConsentsConsentIDSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetInternationalScheduledPaymentConsentsConsentIDRequest struct {
    PathParams GetInternationalScheduledPaymentConsentsConsentIDPathParams 
    Headers GetInternationalScheduledPaymentConsentsConsentIDHeaders 
    Security GetInternationalScheduledPaymentConsentsConsentIDSecurity 
    
}

type GetInternationalScheduledPaymentConsentsConsentIDResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWriteInternationalScheduledConsentResponse6 *shared.ObWriteInternationalScheduledConsentResponse6 
    StatusCode int64 
    
}

