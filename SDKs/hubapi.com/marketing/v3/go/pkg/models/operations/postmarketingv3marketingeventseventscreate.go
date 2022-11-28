package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsCreateSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsCreateRequest struct {
	Request  shared.MarketingEventCreateRequestParams `request:"mediaType=application/json"`
	Security PostMarketingV3MarketingEventsEventsCreateSecurity
}

type PostMarketingV3MarketingEventsEventsCreateResponse struct {
	Body                          []byte
	ContentType                   string
	MarketingEventDefaultResponse *shared.MarketingEventDefaultResponse
	StatusCode                    int64
}
