package operations

import (
	"openapi/pkg/models/shared"
)

type PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
}

type PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PutMarketingV3MarketingEventsEventsExternalEventIDReplaceRequest struct {
	PathParams PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams
	Request    shared.MarketingEventCreateRequestParams `request:"mediaType=application/json"`
	Security   PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity
}

type PutMarketingV3MarketingEventsEventsExternalEventIDReplaceResponse struct {
	Body                                []byte
	ContentType                         string
	MarketingEventPublicDefaultResponse *shared.MarketingEventPublicDefaultResponse
	StatusCode                          int64
}
