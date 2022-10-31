package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams struct {
	Q string `queryParam:"style=form,explode=true,name=q"`
}

type GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity struct {
	Option1 *GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1 `security:"option"`
	Option2 *GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2 `security:"option"`
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
