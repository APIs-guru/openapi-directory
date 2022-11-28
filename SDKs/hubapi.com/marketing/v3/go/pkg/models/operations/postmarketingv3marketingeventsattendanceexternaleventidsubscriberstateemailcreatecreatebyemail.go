package operations

import (
	"openapi/pkg/models/shared"
)

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailPathParams struct {
	ExternalEventID string `pathParam:"style=simple,explode=false,name=externalEventId"`
	SubscriberState string `pathParam:"style=simple,explode=false,name=subscriberState"`
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailQueryParams struct {
	ExternalAccountID *string `queryParam:"style=form,explode=true,name=externalAccountId"`
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailSecurity struct {
	Hapikey           *shared.SchemeHapikey           `security:"scheme,type=apiKey,subtype=query"`
	PrivateAppsLegacy *shared.SchemePrivateAppsLegacy `security:"scheme,type=apiKey,subtype=header"`
	Oauth2Legacy      *shared.SchemeOauth2Legacy      `security:"scheme,type=oauth2"`
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailRequest struct {
	PathParams  PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailPathParams
	QueryParams PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailQueryParams
	Request     shared.BatchInputMarketingEventEmailSubscriber `request:"mediaType=application/json"`
	Security    PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailSecurity
}

type PostMarketingV3MarketingEventsAttendanceExternalEventIDSubscriberStateEmailCreateCreateByEmailResponse struct {
	BatchResponseSubscriberEmailResponse *shared.BatchResponseSubscriberEmailResponse
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}
