package operations

import (
	"openapi/pkg/models/shared"
)

type GetSigningBasketPathParams struct {
	BasketID string `pathParam:"style=simple,explode=false,name=basketId"`
}

type GetSigningBasketHeaders struct {
	Digest                  *string                   `header:"name=Digest"`
	PsuAccept               *string                   `header:"name=PSU-Accept"`
	PsuAcceptCharset        *string                   `header:"name=PSU-Accept-Charset"`
	PsuAcceptEncoding       *string                   `header:"name=PSU-Accept-Encoding"`
	PsuAcceptLanguage       *string                   `header:"name=PSU-Accept-Language"`
	PsuDeviceID             *string                   `header:"name=PSU-Device-ID"`
	PsuGeoLocation          *string                   `header:"name=PSU-Geo-Location"`
	PsuHTTPMethod           *shared.PsuHTTPMethodEnum `header:"name=PSU-Http-Method"`
	PsuIPAddress            *string                   `header:"name=PSU-IP-Address"`
	PsuIPPort               *string                   `header:"name=PSU-IP-Port"`
	PsuUserAgent            *string                   `header:"name=PSU-User-Agent"`
	Signature               *string                   `header:"name=Signature"`
	TppSignatureCertificate *string                   `header:"name=TPP-Signature-Certificate"`
	XRequestID              string                    `header:"name=X-Request-ID"`
}

type GetSigningBasketSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetSigningBasketRequest struct {
	PathParams GetSigningBasketPathParams
	Headers    GetSigningBasketHeaders
	Security   GetSigningBasketSecurity
}

type GetSigningBasketResponse struct {
	ContentType              string
	Error400NgSbs            *shared.Error400NgSbs
	Error400Sbs              *shared.Error400Sbs
	Error401NgSbs            *shared.Error401NgSbs
	Error401Sbs              *shared.Error401Sbs
	Error403NgSbs            *shared.Error403NgSbs
	Error403Sbs              *shared.Error403Sbs
	Error404NgSbs            *shared.Error404NgSbs
	Error404Sbs              *shared.Error404Sbs
	Error405NgSbs            *shared.Error405NgSbs
	Error405Sbs              *shared.Error405Sbs
	Error409NgSbs            *shared.Error409NgSbs
	Error409Sbs              *shared.Error409Sbs
	Headers                  map[string][]string
	StatusCode               int64
	SigningBasketResponse200 *shared.SigningBasketResponse200
}
