package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarEventsInstancesPathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
	EventID    string `pathParam:"style=simple,explode=false,name=eventId"`
}

type CalendarEventsInstancesQueryParams struct {
	Alt                *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	AlwaysIncludeEmail *bool           `queryParam:"style=form,explode=true,name=alwaysIncludeEmail"`
	Fields             *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                *string         `queryParam:"style=form,explode=true,name=key"`
	MaxAttendees       *int64          `queryParam:"style=form,explode=true,name=maxAttendees"`
	MaxResults         *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken         *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	OriginalStart      *string         `queryParam:"style=form,explode=true,name=originalStart"`
	PageToken          *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint        *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowDeleted        *bool           `queryParam:"style=form,explode=true,name=showDeleted"`
	TimeMax            *string         `queryParam:"style=form,explode=true,name=timeMax"`
	TimeMin            *string         `queryParam:"style=form,explode=true,name=timeMin"`
	TimeZone           *string         `queryParam:"style=form,explode=true,name=timeZone"`
	UserIP             *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarEventsInstancesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsInstancesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsInstancesSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsInstancesSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsInstancesSecurity struct {
	Option1 *CalendarEventsInstancesSecurityOption1 `security:"option"`
	Option2 *CalendarEventsInstancesSecurityOption2 `security:"option"`
	Option3 *CalendarEventsInstancesSecurityOption3 `security:"option"`
	Option4 *CalendarEventsInstancesSecurityOption4 `security:"option"`
}

type CalendarEventsInstancesRequest struct {
	PathParams  CalendarEventsInstancesPathParams
	QueryParams CalendarEventsInstancesQueryParams
	Security    CalendarEventsInstancesSecurity
}

type CalendarEventsInstancesResponse struct {
	ContentType string
	Events      *shared.Events
	StatusCode  int64
}
