package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams struct {
	ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveRequest struct {
	PathParams  DeleteMarketingV3MarketingEventsEventsExternalEventIDArchivePathParams
	QueryParams DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveQueryParams
	Security    DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveSecurity
}

type DeleteMarketingV3MarketingEventsEventsExternalEventIDArchiveResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
