package operations

import (
	"openapi/pkg/models/shared"
)

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
}

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams struct {
	ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateRequest struct {
	PathParams  PatchMarketingV3MarketingEventsEventsExternalEventIDUpdatePathParams
	QueryParams PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateQueryParams
	Request     shared.MarketingEventUpdateRequestParams `request:"mediaType=application/json"`
	Security    PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity
}

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateResponse struct {
	Body                                []byte
	ContentType                         string
	MarketingEventPublicDefaultResponse *shared.MarketingEventPublicDefaultResponse
	StatusCode                          int64
}
