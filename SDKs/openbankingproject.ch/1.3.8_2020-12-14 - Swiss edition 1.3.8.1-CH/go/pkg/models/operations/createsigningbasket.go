package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSigningBasketHeaders struct {
	ConsentID                         *string                   `header:"style=simple,explode=false,name=Consent-ID"`
	Digest                            *string                   `header:"style=simple,explode=false,name=Digest"`
	PsuAccept                         *string                   `header:"style=simple,explode=false,name=PSU-Accept"`
	PsuAcceptCharset                  *string                   `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
	PsuAcceptEncoding                 *string                   `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
	PsuAcceptLanguage                 *string                   `header:"style=simple,explode=false,name=PSU-Accept-Language"`
	PsuCorporateID                    *string                   `header:"style=simple,explode=false,name=PSU-Corporate-ID"`
	PsuCorporateIDType                *string                   `header:"style=simple,explode=false,name=PSU-Corporate-ID-Type"`
	PsuDeviceID                       *string                   `header:"style=simple,explode=false,name=PSU-Device-ID"`
	PsuGeoLocation                    *string                   `header:"style=simple,explode=false,name=PSU-Geo-Location"`
	PsuHTTPMethod                     *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
	PsuID                             *string                   `header:"style=simple,explode=false,name=PSU-ID"`
	PsuIDType                         *string                   `header:"style=simple,explode=false,name=PSU-ID-Type"`
	PsuIPAddress                      string                    `header:"style=simple,explode=false,name=PSU-IP-Address"`
	PsuIPPort                         *string                   `header:"style=simple,explode=false,name=PSU-IP-Port"`
	PsuUserAgent                      *string                   `header:"style=simple,explode=false,name=PSU-User-Agent"`
	Signature                         *string                   `header:"style=simple,explode=false,name=Signature"`
	TppExplicitAuthorisationPreferred *bool                     `header:"style=simple,explode=false,name=TPP-Explicit-Authorisation-Preferred"`
	TppNokRedirectURI                 *string                   `header:"style=simple,explode=false,name=TPP-Nok-Redirect-URI"`
	TppNotificationContentPreferred   *string                   `header:"style=simple,explode=false,name=TPP-Notification-Content-Preferred"`
	TppNotificationURI                *string                   `header:"style=simple,explode=false,name=TPP-Notification-URI"`
	TppRedirectPreferred              *bool                     `header:"style=simple,explode=false,name=TPP-Redirect-Preferred"`
	TppRedirectURI                    *string                   `header:"style=simple,explode=false,name=TPP-Redirect-URI"`
	TppSignatureCertificate           *string                   `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
	XRequestID                        string                    `header:"style=simple,explode=false,name=X-Request-ID"`
}

type CreateSigningBasketSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type CreateSigningBasketRequest struct {
	Headers  CreateSigningBasketHeaders
	Request  *shared.SigningBasket `request:"mediaType=application/json"`
	Security CreateSigningBasketSecurity
}

type CreateSigningBasketResponse struct {
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
	SigningBasketResponse201 *shared.SigningBasketResponse201
}
