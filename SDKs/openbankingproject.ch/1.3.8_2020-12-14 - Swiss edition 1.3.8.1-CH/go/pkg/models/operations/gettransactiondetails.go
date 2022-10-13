package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionDetailsPathParams struct {
	AccountID     string `pathParam:"style=simple,explode=false,name=account-id"`
	TransactionID string `pathParam:"style=simple,explode=false,name=transactionId"`
}

type GetTransactionDetailsHeaders struct {
	ConsentID               string                    `header:"name=Consent-ID"`
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

type GetTransactionDetailsSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetTransactionDetailsRequest struct {
	PathParams GetTransactionDetailsPathParams
	Headers    GetTransactionDetailsHeaders
	Security   GetTransactionDetailsSecurity
}

type GetTransactionDetails200ApplicationJSON struct {
	TransactionsDetails shared.TransactionDetailsBody `json:"transactionsDetails"`
}

type GetTransactionDetailsResponse struct {
	ContentType                                   string
	Error400Ais                                   *shared.Error400Ais
	Error400NgAis                                 *shared.Error400NgAis
	Error401Ais                                   *shared.Error401Ais
	Error401NgAis                                 *shared.Error401NgAis
	Error403Ais                                   *shared.Error403Ais
	Error403NgAis                                 *shared.Error403NgAis
	Error404Ais                                   *shared.Error404Ais
	Error404NgAis                                 *shared.Error404NgAis
	Error405Ais                                   *shared.Error405Ais
	Error405NgAis                                 *shared.Error405NgAis
	Error406Ais                                   *shared.Error406Ais
	Error406NgAis                                 *shared.Error406NgAis
	Error409Ais                                   *shared.Error409Ais
	Error409NgAis                                 *shared.Error409NgAis
	Error429Ais                                   *shared.Error429Ais
	Error429NgAis                                 *shared.Error429NgAis
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetTransactionDetails200ApplicationJSONObject *GetTransactionDetails200ApplicationJSON
}
