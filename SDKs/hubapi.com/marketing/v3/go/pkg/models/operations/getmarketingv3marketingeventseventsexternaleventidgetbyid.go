package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams struct {
	ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDRequest struct {
	PathParams  GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDPathParams
	QueryParams GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDQueryParams
	Security    GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDSecurity
}

type GetMarketingV3MarketingEventsEventsExternalEventIDGetByIDResponse struct {
	Body                             []byte
	ContentType                      string
	MarketingEventPublicReadResponse *shared.MarketingEventPublicReadResponse
	StatusCode                       int64
}
