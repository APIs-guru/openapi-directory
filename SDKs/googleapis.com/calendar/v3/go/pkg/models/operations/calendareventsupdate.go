package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarEventsUpdatePathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
	EventID    string `pathParam:"style=simple,explode=false,name=eventId"`
}

type CalendarEventsUpdateSendUpdatesEnum string

const (
	CalendarEventsUpdateSendUpdatesEnumAll          CalendarEventsUpdateSendUpdatesEnum = "all"
	CalendarEventsUpdateSendUpdatesEnumExternalOnly CalendarEventsUpdateSendUpdatesEnum = "externalOnly"
	CalendarEventsUpdateSendUpdatesEnumNone         CalendarEventsUpdateSendUpdatesEnum = "none"
)

type CalendarEventsUpdateQueryParams struct {
	Alt                   *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	AlwaysIncludeEmail    *bool                                `queryParam:"style=form,explode=true,name=alwaysIncludeEmail"`
	ConferenceDataVersion *int64                               `queryParam:"style=form,explode=true,name=conferenceDataVersion"`
	Fields                *string                              `queryParam:"style=form,explode=true,name=fields"`
	Key                   *string                              `queryParam:"style=form,explode=true,name=key"`
	MaxAttendees          *int64                               `queryParam:"style=form,explode=true,name=maxAttendees"`
	OauthToken            *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint           *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser             *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	SendNotifications     *bool                                `queryParam:"style=form,explode=true,name=sendNotifications"`
	SendUpdates           *CalendarEventsUpdateSendUpdatesEnum `queryParam:"style=form,explode=true,name=sendUpdates"`
	SupportsAttachments   *bool                                `queryParam:"style=form,explode=true,name=supportsAttachments"`
	UserIP                *string                              `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarEventsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsUpdateSecurity struct {
	Option1 *CalendarEventsUpdateSecurityOption1 `security:"option"`
	Option2 *CalendarEventsUpdateSecurityOption2 `security:"option"`
}

type CalendarEventsUpdateRequest struct {
	PathParams  CalendarEventsUpdatePathParams
	QueryParams CalendarEventsUpdateQueryParams
	Request     *shared.Event `request:"mediaType=application/json"`
	Security    CalendarEventsUpdateSecurity
}

type CalendarEventsUpdateResponse struct {
	ContentType string
	Event       *shared.Event
	StatusCode  int64
}
