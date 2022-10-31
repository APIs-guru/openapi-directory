package operations

import (
"openapi/pkg/models/shared")

type UpdatePaymentCancellationPsuDataPathParams struct {
    AuthorisationID string `pathParam:"style=simple,explode=false,name=authorisationId"`
    PaymentProduct shared.PaymentProductEnum `pathParam:"style=simple,explode=false,name=payment-product"`
    PaymentService shared.PaymentServiceEnum `pathParam:"style=simple,explode=false,name=payment-service"`
    PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
    
}

type UpdatePaymentCancellationPsuDataHeaders struct {
    Digest *string `header:"style=simple,explode=false,name=Digest"`
    PsuAccept *string `header:"style=simple,explode=false,name=PSU-Accept"`
    PsuAcceptCharset *string `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
    PsuAcceptEncoding *string `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
    PsuAcceptLanguage *string `header:"style=simple,explode=false,name=PSU-Accept-Language"`
    PsuCorporateID *string `header:"style=simple,explode=false,name=PSU-Corporate-ID"`
    PsuCorporateIDType *string `header:"style=simple,explode=false,name=PSU-Corporate-ID-Type"`
    PsuDeviceID *string `header:"style=simple,explode=false,name=PSU-Device-ID"`
    PsuGeoLocation *string `header:"style=simple,explode=false,name=PSU-Geo-Location"`
    PsuHTTPMethod *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
    PsuID *string `header:"style=simple,explode=false,name=PSU-ID"`
    PsuIDType *string `header:"style=simple,explode=false,name=PSU-ID-Type"`
    PsuIPAddress *string `header:"style=simple,explode=false,name=PSU-IP-Address"`
    PsuIPPort *string `header:"style=simple,explode=false,name=PSU-IP-Port"`
    PsuUserAgent *string `header:"style=simple,explode=false,name=PSU-User-Agent"`
    Signature *string `header:"style=simple,explode=false,name=Signature"`
    TppSignatureCertificate *string `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
    XRequestID string `header:"style=simple,explode=false,name=X-Request-ID"`
    
}

type UpdatePaymentCancellationPsuDataSecurity struct {
    BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdatePaymentCancellationPsuDataRequest struct {
    PathParams UpdatePaymentCancellationPsuDataPathParams 
    Headers UpdatePaymentCancellationPsuDataHeaders 
    Request *interface{} `request:"mediaType=application/json"`
    Security UpdatePaymentCancellationPsuDataSecurity 
    
}

type UpdatePaymentCancellationPsuDataResponse struct {
    ContentType string 
    Error400NgPis *shared.Error400NgPis 
    Error400Pis *shared.Error400Pis 
    Error401NgPis *shared.Error401NgPis 
    Error401Pis *shared.Error401Pis 
    Error403NgPis *shared.Error403NgPis 
    Error403Pis *shared.Error403Pis 
    Error404NgPis *shared.Error404NgPis 
    Error404Pis *shared.Error404Pis 
    Error405NgPis *shared.Error405NgPis 
    Error405Pis *shared.Error405Pis 
    Error409NgPis *shared.Error409NgPis 
    Error409Pis *shared.Error409Pis 
    Headers map[string][]string 
    StatusCode int64 
    UpdatePaymentCancellationPsuData200ApplicationJSONOneOf *interface{} 
    
}

