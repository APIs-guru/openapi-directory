package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionListPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=account-id"`
}

type GetTransactionListQueryParams struct {
	BookingStatus      shared.BookingStatusEnum `queryParam:"style=form,explode=true,name=bookingStatus"`
	DateFrom           *time.Time               `queryParam:"style=form,explode=true,name=dateFrom"`
	DateTo             *time.Time               `queryParam:"style=form,explode=true,name=dateTo"`
	DeltaList          *bool                    `queryParam:"style=form,explode=true,name=deltaList"`
	EntryReferenceFrom *string                  `queryParam:"style=form,explode=true,name=entryReferenceFrom"`
	WithBalance        *bool                    `queryParam:"style=form,explode=true,name=withBalance"`
}

type GetTransactionListHeaders struct {
	ConsentID               string                    `header:"style=simple,explode=false,name=Consent-ID"`
	Digest                  *string                   `header:"style=simple,explode=false,name=Digest"`
	PsuAccept               *string                   `header:"style=simple,explode=false,name=PSU-Accept"`
	PsuAcceptCharset        *string                   `header:"style=simple,explode=false,name=PSU-Accept-Charset"`
	PsuAcceptEncoding       *string                   `header:"style=simple,explode=false,name=PSU-Accept-Encoding"`
	PsuAcceptLanguage       *string                   `header:"style=simple,explode=false,name=PSU-Accept-Language"`
	PsuDeviceID             *string                   `header:"style=simple,explode=false,name=PSU-Device-ID"`
	PsuGeoLocation          *string                   `header:"style=simple,explode=false,name=PSU-Geo-Location"`
	PsuHTTPMethod           *shared.PsuHTTPMethodEnum `header:"style=simple,explode=false,name=PSU-Http-Method"`
	PsuIPAddress            *string                   `header:"style=simple,explode=false,name=PSU-IP-Address"`
	PsuIPPort               *string                   `header:"style=simple,explode=false,name=PSU-IP-Port"`
	PsuUserAgent            *string                   `header:"style=simple,explode=false,name=PSU-User-Agent"`
	Signature               *string                   `header:"style=simple,explode=false,name=Signature"`
	TppSignatureCertificate *string                   `header:"style=simple,explode=false,name=TPP-Signature-Certificate"`
	XRequestID              string                    `header:"style=simple,explode=false,name=X-Request-ID"`
}

type GetTransactionListSecurity struct {
	BearerAuthOAuth *shared.SchemeBearerAuthOAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetTransactionListRequest struct {
	PathParams  GetTransactionListPathParams
	QueryParams GetTransactionListQueryParams
	Headers     GetTransactionListHeaders
	Security    GetTransactionListSecurity
}

type GetTransactionListResponse struct {
	Body                        []byte
	ContentType                 string
	Error400Ais                 *shared.Error400Ais
	Error400NgAis               *shared.Error400NgAis
	Error401Ais                 *shared.Error401Ais
	Error401NgAis               *shared.Error401NgAis
	Error403Ais                 *shared.Error403Ais
	Error403NgAis               *shared.Error403NgAis
	Error404Ais                 *shared.Error404Ais
	Error404NgAis               *shared.Error404NgAis
	Error405Ais                 *shared.Error405Ais
	Error405NgAis               *shared.Error405NgAis
	Error406Ais                 *shared.Error406Ais
	Error406NgAis               *shared.Error406NgAis
	Error409Ais                 *shared.Error409Ais
	Error409NgAis               *shared.Error409NgAis
	Error429Ais                 *shared.Error429Ais
	Error429NgAis               *shared.Error429NgAis
	Headers                     map[string][]string
	StatusCode                  int64
	TransactionsResponse200JSON *shared.TransactionsResponse200JSON
}
