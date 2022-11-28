package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDPathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
	SubscriberState string `pathParam:"style=simple,explode=false,name=subscriberState"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDQueryParams struct {
	ExternalAccountID string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDRequest struct {
	PathParams  PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDPathParams
	QueryParams PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDQueryParams
	Request     shared.BatchInputMarketingEventEmailSubscriber `request:"mediaType=application/json"`
	Security    PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDSecurity
}

type PostMarketingV3MarketingEventsEventsExternalEventIDSubscriberStateEmailUpsertDoEmailUpsertByIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
