package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity struct {
	Option1 *PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1 `security:"option"`
	Option2 *PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2 `security:"option"`
}

type PostMarketingV3MarketingEventsEventsDeleteArchiveRequest struct {
	Request  shared.BatchInputMarketingEventExternalUniqueIdentifier `request:"mediaType=application/json"`
	Security PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity
}

type PostMarketingV3MarketingEventsEventsDeleteArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
