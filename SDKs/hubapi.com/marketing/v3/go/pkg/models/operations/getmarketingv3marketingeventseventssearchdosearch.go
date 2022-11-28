package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams struct {
	Q string `queryParam:"style=form,explode=true,name=q"`
}

type GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
}

type GetMarketingV3MarketingEventsEventsSearchDoSearchRequest struct {
	QueryParams GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams
	Security    GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity
}

type GetMarketingV3MarketingEventsEventsSearchDoSearchResponse struct {
	Body                                                             []byte
	CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging *shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging
	ContentType                                                      string
	StatusCode                                                       int64
}
