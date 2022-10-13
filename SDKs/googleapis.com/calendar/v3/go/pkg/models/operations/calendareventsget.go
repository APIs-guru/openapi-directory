package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarEventsGetPathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
	EventID    string `pathParam:"style=simple,explode=false,name=eventId"`
}

type CalendarEventsGetQueryParams struct {
	Alt                *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	AlwaysIncludeEmail *bool           `queryParam:"style=form,explode=true,name=alwaysIncludeEmail"`
	Fields             *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                *string         `queryParam:"style=form,explode=true,name=key"`
	MaxAttendees       *int64          `queryParam:"style=form,explode=true,name=maxAttendees"`
	OauthToken         *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	TimeZone           *string         `queryParam:"style=form,explode=true,name=timeZone"`
	UserIP             *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarEventsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsGetSecurity struct {
	Option1 *CalendarEventsGetSecurityOption1 `security:"option"`
	Option2 *CalendarEventsGetSecurityOption2 `security:"option"`
	Option3 *CalendarEventsGetSecurityOption3 `security:"option"`
	Option4 *CalendarEventsGetSecurityOption4 `security:"option"`
}

type CalendarEventsGetRequest struct {
	PathParams  CalendarEventsGetPathParams
	QueryParams CalendarEventsGetQueryParams
	Security    CalendarEventsGetSecurity
}

type CalendarEventsGetResponse struct {
	ContentType string
	Event       *shared.Event
	StatusCode  int64
}
