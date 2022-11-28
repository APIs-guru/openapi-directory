package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
	SubscriberState string `pathParam:"style=simple,explode=false,name=subscriberState"`
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams struct {
	ExternalAccountID *string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateRequest struct {
	PathParams  PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreatePathParams
	QueryParams PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateQueryParams
	Request     shared.BatchInputMarketingEventSubscriber `request:"mediaType=application/json"`
	Security    PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateSecurity
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateCreateCreateResponse struct {
	BatchResponseSubscriberVidResponse *shared.BatchResponseSubscriberVidResponse
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
}
