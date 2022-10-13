package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarEventsDeletePathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
	EventID    string `pathParam:"style=simple,explode=false,name=eventId"`
}

type CalendarEventsDeleteSendUpdatesEnum string

const (
	CalendarEventsDeleteSendUpdatesEnumAll          CalendarEventsDeleteSendUpdatesEnum = "all"
	CalendarEventsDeleteSendUpdatesEnumExternalOnly CalendarEventsDeleteSendUpdatesEnum = "externalOnly"
	CalendarEventsDeleteSendUpdatesEnumNone         CalendarEventsDeleteSendUpdatesEnum = "none"
)

type CalendarEventsDeleteQueryParams struct {
	Alt               *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Fields            *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	SendNotifications *bool                                `queryParam:"style=form,explode=true,name=sendNotifications"`
	SendUpdates       *CalendarEventsDeleteSendUpdatesEnum `queryParam:"style=form,explode=true,name=sendUpdates"`
	UserIP            *string                              `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarEventsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsDeleteSecurity struct {
	Option1 *CalendarEventsDeleteSecurityOption1 `security:"option"`
	Option2 *CalendarEventsDeleteSecurityOption2 `security:"option"`
}

type CalendarEventsDeleteRequest struct {
	PathParams  CalendarEventsDeletePathParams
	QueryParams CalendarEventsDeleteQueryParams
	Security    CalendarEventsDeleteSecurity
}

type CalendarEventsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
