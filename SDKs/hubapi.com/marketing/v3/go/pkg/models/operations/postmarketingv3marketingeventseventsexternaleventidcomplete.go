package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsExternalEventIDCompletePathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteQueryParams struct {
	ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteSecurity struct {
	Option1 *PostMarketingV3MarketingEventsEventsExternalEventIDCompleteSecurityOption1 `security:"option"`
	Option2 *PostMarketingV3MarketingEventsEventsExternalEventIDCompleteSecurityOption2 `security:"option"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteRequest struct {
	PathParams  PostMarketingV3MarketingEventsEventsExternalEventIDCompletePathParams
	QueryParams PostMarketingV3MarketingEventsEventsExternalEventIDCompleteQueryParams
	Request     shared.MarketingEventCompleteRequestParams `request:"mediaType=application/json"`
	Security    PostMarketingV3MarketingEventsEventsExternalEventIDCompleteSecurity
}

type PostMarketingV3MarketingEventsEventsExternalEventIDCompleteResponse struct {
	Body                          []byte
	ContentType                   string
	MarketingEventDefaultResponse *shared.MarketingEventDefaultResponse
	StatusCode                    int64
}
