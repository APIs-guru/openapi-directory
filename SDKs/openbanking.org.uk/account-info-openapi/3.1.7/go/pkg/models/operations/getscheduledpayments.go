package operations

import (
"openapi/pkg/models/shared")

type GetScheduledPaymentsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetScheduledPaymentsSecurity struct {
    PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetScheduledPaymentsRequest struct {
    Headers GetScheduledPaymentsHeaders 
    Security GetScheduledPaymentsSecurity 
    
}

type GetScheduledPaymentsResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObReadScheduledPayment3 *shared.ObReadScheduledPayment3 
    StatusCode int64 
    
}

