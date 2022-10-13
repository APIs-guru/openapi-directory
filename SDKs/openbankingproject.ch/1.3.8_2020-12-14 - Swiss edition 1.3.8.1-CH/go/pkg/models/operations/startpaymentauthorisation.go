package operations

import (
	"openapi/pkg/models/shared"
)

type StartPaymentAuthorisationPathParams struct {
	PaymentProduct shared.PaymentProductEnum `pathParam:"style=simple,explode=false,name=payment-product"`
	PaymentService shared.PaymentServiceEnum `pathParam:"style=simple,explode=false,name=payment-service"`
	PaymentID      string                    `pathParam:"style=simple,explode=false,name=paymentId"`
}

type StartPaymentAuthorisationHeaders struct {
	Digest                          *string                   `header:"name=Digest"`
	PsuAccept                       *string                   `header:"name=PSU-Accept"`
	PsuAcceptCharset                *string                   `header:"name=PSU-Accept-Charset"`
	PsuAcceptEncoding               *string                   `header:"name=PSU-Accept-Encoding"`
	PsuAcceptLanguage               *string                   `header:"name=PSU-Accept-Language"`
	PsuCorporateID                  *string                   `header:"name=PSU-Corporate-ID"`
	PsuCorporateIDType              *string                   `header:"name=PSU-Corporate-ID-Type"`
	PsuDeviceID                     *string                   `header:"name=PSU-Device-ID"`
	PsuGeoLocation                  *string                   `header:"name=PSU-Geo-Location"`
	PsuHTTPMethod                   *shared.PsuHTTPMethodEnum `header:"name=PSU-Http-Method"`
	PsuID                           *string                   `header:"name=PSU-ID"`
	PsuIDType                       *string                   `header:"name=PSU-ID-Type"`
	PsuIPAddress                    *string                   `header:"name=PSU-IP-Address"`
	PsuIPPort                       *string                   `header:"name=PSU-IP-Port"`
	PsuUserAgent                    *string                   `header:"name=PSU-User-Agent"`
	Signature                       *string                   `header:"name=Signature"`
	TppNokRedirectURI               *string                   `header:"name=TPP-Nok-Redirect-URI"`
	TppNotificationContentPreferred *string                   `header:"name=TPP-Notification-Content-Preferred"`
	TppNotificationURI              *string                   `header:"name=TPP-Notification-URI"`
	TppRedirectPreferred            *bool                     `header:"name=TPP-Redirect-Preferred"`
	TppRedirectURI                  *string                   `header:"name=TPP-Redirect-URI"`
	TppSignatureCertificate         *string                   `header:"name=TPP-Signature-Certificate"`
	XRequestID                      string                    `header:"name=X-Request-ID"`
}

type StartPaymentAuthorisationSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type StartPaymentAuthorisationRequest struct {
	PathParams StartPaymentAuthorisationPathParams
	Headers    StartPaymentAuthorisationHeaders
	Request    *interface{} `request:"mediaType=application/json"`
	Security   StartPaymentAuthorisationSecurity
}

type StartPaymentAuthorisationResponse struct {
	ContentType             string
	Error400NgPis           *shared.Error400NgPis
	Error400Pis             *shared.Error400Pis
	Error401NgPis           *shared.Error401NgPis
	Error401Pis             *shared.Error401Pis
	Error403NgPis           *shared.Error403NgPis
	Error403Pis             *shared.Error403Pis
	Error404NgPis           *shared.Error404NgPis
	Error404Pis             *shared.Error404Pis
	Error405NgPis           *shared.Error405NgPis
	Error405Pis             *shared.Error405Pis
	Error409NgPis           *shared.Error409NgPis
	Error409Pis             *shared.Error409Pis
	Headers                 map[string][]string
	StatusCode              int64
	StartScaprocessResponse *shared.StartScaprocessResponse
}
