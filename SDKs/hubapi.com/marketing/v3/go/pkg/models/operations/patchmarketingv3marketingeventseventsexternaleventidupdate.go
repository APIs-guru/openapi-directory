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

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption1 struct {
	Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
}

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption2 struct {
	Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
}

type PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurity struct {
	Option1 *PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption1 `security:"option"`
	Option2 *PatchMarketingV3MarketingEventsEventsExternalEventIDUpdateSecurityOption2 `security:"option"`
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
