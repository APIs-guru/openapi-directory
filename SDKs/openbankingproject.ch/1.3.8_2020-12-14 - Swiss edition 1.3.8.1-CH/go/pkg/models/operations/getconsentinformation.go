package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsentInformationPathParams struct {
	ConsentID string `pathParam:"style=simple,explode=false,name=consentId"`
}

type GetConsentInformationHeaders struct {
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

type GetConsentInformationSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetConsentInformationRequest struct {
	PathParams GetConsentInformationPathParams
	Headers    GetConsentInformationHeaders
	Security   GetConsentInformationSecurity
}

type GetConsentInformationResponse struct {
	ContentType                       string
	Error400Ais                       *shared.Error400Ais
	Error400NgAis                     *shared.Error400NgAis
	Error401Ais                       *shared.Error401Ais
	Error401NgAis                     *shared.Error401NgAis
	Error403Ais                       *shared.Error403Ais
	Error403NgAis                     *shared.Error403NgAis
	Error404Ais                       *shared.Error404Ais
	Error404NgAis                     *shared.Error404NgAis
	Error405Ais                       *shared.Error405Ais
	Error405NgAis                     *shared.Error405NgAis
	Error406Ais                       *shared.Error406Ais
	Error406NgAis                     *shared.Error406NgAis
	Error409Ais                       *shared.Error409Ais
	Error409NgAis                     *shared.Error409NgAis
	Error429Ais                       *shared.Error429Ais
	Error429NgAis                     *shared.Error429NgAis
	Headers                           map[string][]string
	StatusCode                        int64
	ConsentInformationResponse200JSON *shared.ConsentInformationResponse200JSON
}
