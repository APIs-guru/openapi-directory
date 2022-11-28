package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsDeleteArchiveBatchRequest struct {
	Request  shared.BatchInputMarketingEventExternalUniqueIdentifier `request:"mediaType=application/json"`
	Security PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity
}

type PostMarketingV3MarketingEventsEventsDeleteArchiveBatchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
