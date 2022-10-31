package operations

import (
"openapi/pkg/models/shared")

type GetInternationalPaymentsInternationalPaymentIDPaymentDetailsPathParams struct {
    InternationalPaymentID string `pathParam:"style=simple,explode=false,name=InternationalPaymentId"`
    
}

type GetInternationalPaymentsInternationalPaymentIDPaymentDetailsHeaders struct {
    Authorization string `header:"style=simple,explode=false,name=Authorization"`
    XCustomerUserAgent *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
    XFapiAuthDate *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
    XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
    XFapiInteractionID *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
    
}

type GetInternationalPaymentsInternationalPaymentIDPaymentDetailsSecurity struct {
    TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
    
}

type GetInternationalPaymentsInternationalPaymentIDPaymentDetailsRequest struct {
    PathParams GetInternationalPaymentsInternationalPaymentIDPaymentDetailsPathParams 
    Headers GetInternationalPaymentsInternationalPaymentIDPaymentDetailsHeaders 
    Security GetInternationalPaymentsInternationalPaymentIDPaymentDetailsSecurity 
    
}

type GetInternationalPaymentsInternationalPaymentIDPaymentDetailsResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    ObErrorResponse1 *shared.ObErrorResponse1 
    ObWritePaymentDetailsResponse1 *shared.ObWritePaymentDetailsResponse1 
    StatusCode int64 
    
}

