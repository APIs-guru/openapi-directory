package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarEventsImportPathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
}

type CalendarEventsImportQueryParams struct {
	Alt                   *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	ConferenceDataVersion *int64          `queryParam:"style=form,explode=true,name=conferenceDataVersion"`
	Fields                *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                   *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken            *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint           *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser             *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	SupportsAttachments   *bool           `queryParam:"style=form,explode=true,name=supportsAttachments"`
	UserIP                *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarEventsImportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsImportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarEventsImportSecurity struct {
	Option1 *CalendarEventsImportSecurityOption1 `security:"option"`
	Option2 *CalendarEventsImportSecurityOption2 `security:"option"`
}

type CalendarEventsImportRequest struct {
	PathParams  CalendarEventsImportPathParams
	QueryParams CalendarEventsImportQueryParams
	Request     *shared.Event `request:"mediaType=application/json"`
	Security    CalendarEventsImportSecurity
}

type CalendarEventsImportResponse struct {
	ContentType string
	Event       *shared.Event
	StatusCode  int64
}
