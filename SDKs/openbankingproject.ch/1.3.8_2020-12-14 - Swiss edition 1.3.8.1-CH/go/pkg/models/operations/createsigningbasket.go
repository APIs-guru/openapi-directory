package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSigningBasketHeaders struct {
	ConsentID                         *string                   `header:"name=Consent-ID"`
	Digest                            *string                   `header:"name=Digest"`
	PsuAccept                         *string                   `header:"name=PSU-Accept"`
	PsuAcceptCharset                  *string                   `header:"name=PSU-Accept-Charset"`
	PsuAcceptEncoding                 *string                   `header:"name=PSU-Accept-Encoding"`
	PsuAcceptLanguage                 *string                   `header:"name=PSU-Accept-Language"`
	PsuCorporateID                    *string                   `header:"name=PSU-Corporate-ID"`
	PsuCorporateIDType                *string                   `header:"name=PSU-Corporate-ID-Type"`
	PsuDeviceID                       *string                   `header:"name=PSU-Device-ID"`
	PsuGeoLocation                    *string                   `header:"name=PSU-Geo-Location"`
	PsuHTTPMethod                     *shared.PsuHTTPMethodEnum `header:"name=PSU-Http-Method"`
	PsuID                             *string                   `header:"name=PSU-ID"`
	PsuIDType                         *string                   `header:"name=PSU-ID-Type"`
	PsuIPAddress                      string                    `header:"name=PSU-IP-Address"`
	PsuIPPort                         *string                   `header:"name=PSU-IP-Port"`
	PsuUserAgent                      *string                   `header:"name=PSU-User-Agent"`
	Signature                         *string                   `header:"name=Signature"`
	TppExplicitAuthorisationPreferred *bool                     `header:"name=TPP-Explicit-Authorisation-Preferred"`
	TppNokRedirectURI                 *string                   `header:"name=TPP-Nok-Redirect-URI"`
	TppNotificationContentPreferred   *string                   `header:"name=TPP-Notification-Content-Preferred"`
	TppNotificationURI                *string                   `header:"name=TPP-Notification-URI"`
	TppRedirectPreferred              *bool                     `header:"name=TPP-Redirect-Preferred"`
	TppRedirectURI                    *string                   `header:"name=TPP-Redirect-URI"`
	TppSignatureCertificate           *string                   `header:"name=TPP-Signature-Certificate"`
	XRequestID                        string                    `header:"name=X-Request-ID"`
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
