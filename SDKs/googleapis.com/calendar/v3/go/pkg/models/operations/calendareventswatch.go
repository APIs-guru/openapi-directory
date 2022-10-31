package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarEventsWatchPathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
}

type CalendarEventsWatchOrderByEnum string

const (
	CalendarEventsWatchOrderByEnumStartTime CalendarEventsWatchOrderByEnum = "startTime"
	CalendarEventsWatchOrderByEnumUpdated   CalendarEventsWatchOrderByEnum = "updated"
)

type CalendarEventsWatchQueryParams struct {
	Alt                     *shared.AltEnum                 `queryParam:"style=form,explode=true,name=alt"`
	AlwaysIncludeEmail      *bool                           `queryParam:"style=form,explode=true,name=alwaysIncludeEmail"`
	Fields                  *string                         `queryParam:"style=form,explode=true,name=fields"`
	ICalUID                 *string                         `queryParam:"style=form,explode=true,name=iCalUID"`
	Key                     *string                         `queryParam:"style=form,explode=true,name=key"`
	MaxAttendees            *int64                          `queryParam:"style=form,explode=true,name=maxAttendees"`
	MaxResults              *int64                          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken              *string                         `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy                 *CalendarEventsWatchOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken               *string                         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint             *bool                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	PrivateExtendedProperty []string                        `queryParam:"style=form,explode=true,name=privateExtendedProperty"`
	Q                       *string                         `queryParam:"style=form,explode=true,name=q"`
	QuotaUser               *string                         `queryParam:"style=form,explode=true,name=quotaUser"`
	SharedExtendedProperty  []string                        `queryParam:"style=form,explode=true,name=sharedExtendedProperty"`
	ShowDeleted             *bool                           `queryParam:"style=form,explode=true,name=showDeleted"`
	ShowHiddenInvitations   *bool                           `queryParam:"style=form,explode=true,name=showHiddenInvitations"`
	SingleEvents            *bool                           `queryParam:"style=form,explode=true,name=singleEvents"`
	SyncToken               *string                         `queryParam:"style=form,explode=true,name=syncToken"`
	TimeMax                 *string                         `queryParam:"style=form,explode=true,name=timeMax"`
	TimeMin                 *string                         `queryParam:"style=form,explode=true,name=timeMin"`
	TimeZone                *string                         `queryParam:"style=form,explode=true,name=timeZone"`
	UpdatedMin              *string                         `queryParam:"style=form,explode=true,name=updatedMin"`
	UserIP                  *string                         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarEventsWatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsWatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsWatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsWatchSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsWatchSecurity struct {
	Option1 *CalendarEventsWatchSecurityOption1 `security:"option"`
	Option2 *CalendarEventsWatchSecurityOption2 `security:"option"`
	Option3 *CalendarEventsWatchSecurityOption3 `security:"option"`
	Option4 *CalendarEventsWatchSecurityOption4 `security:"option"`
}

type CalendarEventsWatchRequest struct {
	PathParams  CalendarEventsWatchPathParams
	QueryParams CalendarEventsWatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    CalendarEventsWatchSecurity
}

type CalendarEventsWatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
