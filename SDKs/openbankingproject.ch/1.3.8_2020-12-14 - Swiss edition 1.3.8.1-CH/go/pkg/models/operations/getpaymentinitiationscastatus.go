package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentInitiationScaStatusPathParams struct {
	AuthorisationID string                    `pathParam:"style=simple,explode=false,name=authorisationId"`
	PaymentProduct  shared.PaymentProductEnum `pathParam:"style=simple,explode=false,name=payment-product"`
	PaymentService  shared.PaymentServiceEnum `pathParam:"style=simple,explode=false,name=payment-service"`
	PaymentID       string                    `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentInitiationScaStatusHeaders struct {
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

type GetPaymentInitiationScaStatusSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetPaymentInitiationScaStatusRequest struct {
	PathParams GetPaymentInitiationScaStatusPathParams
	Headers    GetPaymentInitiationScaStatusHeaders
	Security   GetPaymentInitiationScaStatusSecurity
}

type GetPaymentInitiationScaStatusResponse struct {
	ContentType       string
	Error400NgPis     *shared.Error400NgPis
	Error400Pis       *shared.Error400Pis
	Error401NgPis     *shared.Error401NgPis
	Error401Pis       *shared.Error401Pis
	Error403NgPis     *shared.Error403NgPis
	Error403Pis       *shared.Error403Pis
	Error404NgPis     *shared.Error404NgPis
	Error404Pis       *shared.Error404Pis
	Error405NgPis     *shared.Error405NgPis
	Error405Pis       *shared.Error405Pis
	Error409NgPis     *shared.Error409NgPis
	Error409Pis       *shared.Error409Pis
	Headers           map[string][]string
	StatusCode        int64
	ScaStatusResponse *shared.ScaStatusResponse
}
