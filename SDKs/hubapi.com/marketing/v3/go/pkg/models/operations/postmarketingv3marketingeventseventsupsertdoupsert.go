package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest struct {
	Request  shared.BatchInputMarketingEventCreateRequestParams `request:"mediaType=application/json"`
	Security PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity
}

type PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse struct {
	BatchResponseMarketingEventPublicDefaultResponse *shared.BatchResponseMarketingEventPublicDefaultResponse
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
}
