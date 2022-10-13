package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarEventsQuickAddPathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
}

type CalendarEventsQuickAddSendUpdatesEnum string

const (
	CalendarEventsQuickAddSendUpdatesEnumAll          CalendarEventsQuickAddSendUpdatesEnum = "all"
	CalendarEventsQuickAddSendUpdatesEnumExternalOnly CalendarEventsQuickAddSendUpdatesEnum = "externalOnly"
	CalendarEventsQuickAddSendUpdatesEnumNone         CalendarEventsQuickAddSendUpdatesEnum = "none"
)

type CalendarEventsQuickAddQueryParams struct {
	Alt               *shared.AltEnum                        `queryParam:"style=form,explode=true,name=alt"`
	Fields            *string                                `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                                `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                `queryParam:"style=form,explode=true,name=quotaUser"`
	SendNotifications *bool                                  `queryParam:"style=form,explode=true,name=sendNotifications"`
	SendUpdates       *CalendarEventsQuickAddSendUpdatesEnum `queryParam:"style=form,explode=true,name=sendUpdates"`
	Text              string                                 `queryParam:"style=form,explode=true,name=text"`
	UserIP            *string                                `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarEventsQuickAddSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsQuickAddSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsQuickAddSecurity struct {
	Option1 *CalendarEventsQuickAddSecurityOption1 `security:"option"`
	Option2 *CalendarEventsQuickAddSecurityOption2 `security:"option"`
}

type CalendarEventsQuickAddRequest struct {
	PathParams  CalendarEventsQuickAddPathParams
	QueryParams CalendarEventsQuickAddQueryParams
	Security    CalendarEventsQuickAddSecurity
}

type CalendarEventsQuickAddResponse struct {
	ContentType string
	Event       *shared.Event
	StatusCode  int64
}
