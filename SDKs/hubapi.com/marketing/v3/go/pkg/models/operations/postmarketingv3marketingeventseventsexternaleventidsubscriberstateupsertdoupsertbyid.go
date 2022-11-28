package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDPathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
	SubscriberState string `pathParam:"style=simple,explode=false,name=subscriberState"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDQueryParams struct {
	ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDRequest struct {
	PathParams  PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDPathParams
	QueryParams PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDQueryParams
	Request     shared.BatchInputMarketingEventSubscriber `request:"mediaType=application/json"`
	Security    PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDSecurity
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateUpsertDoUpsertByIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
