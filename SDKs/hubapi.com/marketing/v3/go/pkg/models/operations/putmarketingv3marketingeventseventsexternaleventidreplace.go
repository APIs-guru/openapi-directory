package operations

import (
	"openapi/pkg/models/shared"
)

type PutMarketingV3MarketingEventsEventsExternalEventIDReplacePathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
}

type PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurity struct {
	Option1 *PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption1 `security:"option"`
	Option2 *PutMarketingV3MarketingEventsEventsExternalEventIDReplaceSecurityOption2 `security:"option"`
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
