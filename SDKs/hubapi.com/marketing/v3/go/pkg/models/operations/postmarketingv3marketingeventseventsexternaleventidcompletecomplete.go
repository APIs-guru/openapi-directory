package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompletePathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteQueryParams struct {
	ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteRequest struct {
	PathParams  PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompletePathParams
	QueryParams PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteQueryParams
	Request     shared.MarketingEventCompleteRequestParams `request:"mediaType=application/json"`
	Security    PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteSecurity
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteCompleteResponse struct {
	Body                          []byte
	ContentType                   string
	MarketingEventDefaultResponse *shared.MarketingEventDefaultResponse
	StatusCode                    int64
}
