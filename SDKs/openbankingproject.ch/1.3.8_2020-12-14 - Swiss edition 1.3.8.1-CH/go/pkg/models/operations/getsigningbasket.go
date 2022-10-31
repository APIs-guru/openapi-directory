package operations

import (
"openapi/pkg/models/shared")

type GetSigningBasketPathParams struct {
    BasketID string `pathParam:"style=simple,explode=false,name=basketId"`
    
}

type GetSigningBasketHeaders struct {
    Digest *string `header:"style=simple,explode=false,name=Digest"`
    PsuAccept *string `header:"style=simple,explode=false,name=PSU-Accept"`
    PsuAcceptCharset *string `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
    PsuAcceptEncoding *string `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
    PsuAcceptLanguage *string `header:"style=simple,explode=false,name=PSU-Accept-Language"`
    PsuDeviceID *string `header:"style=simple,explode=false,name=PSU-Device-ID"`
    PsuGeoLocation *string `header:"style=simple,explode=false,name=PSU-Geo-Location"`
    PsuHTTPMethod *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
    PsuIPAddress *string `header:"style=simple,explode=false,name=PSU-IP-Address"`
    PsuIPPort *string `header:"style=simple,explode=false,name=PSU-IP-Port"`
    PsuUserAgent *string `header:"style=simple,explode=false,name=PSU-User-Agent"`
    Signature *string `header:"style=simple,explode=false,name=Signature"`
    TppSignatureCertificate *string `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
    XRequestID string `header:"style=simple,explode=false,name=X-Request-ID"`
    
}

type GetSigningBasketSecurity struct {
    BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type GetSigningBasketRequest struct {
    PathParams GetSigningBasketPathParams 
    Headers GetSigningBasketHeaders 
    Security GetSigningBasketSecurity 
    
}

type GetSigningBasketResponse struct {
    ContentType string 
    Error400NgSbs *shared.Error400NgSbs 
    Error400Sbs *shared.Error400Sbs 
    Error401NgSbs *shared.Error401NgSbs 
    Error401Sbs *shared.Error401Sbs 
    Error403NgSbs *shared.Error403NgSbs 
    Error403Sbs *shared.Error403Sbs 
    Error404NgSbs *shared.Error404NgSbs 
    Error404Sbs *shared.Error404Sbs 
    Error405NgSbs *shared.Error405NgSbs 
    Error405Sbs *shared.Error405Sbs 
    Error409NgSbs *shared.Error409NgSbs 
    Error409Sbs *shared.Error409Sbs 
    Headers map[string][]string 
    StatusCode int64 
    SigningBasketResponse200 *shared.SigningBasketResponse200 
    
}

