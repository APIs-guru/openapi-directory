package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarChannelsStopQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarChannelsStopSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarChannelsStopSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarChannelsStopSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarChannelsStopSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarChannelsStopSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarChannelsStopSecurity struct {
	Option1 *CalendarChannelsStopSecurityOption1 `security:"option"`
	Option2 *CalendarChannelsStopSecurityOption2 `security:"option"`
	Option3 *CalendarChannelsStopSecurityOption3 `security:"option"`
	Option4 *CalendarChannelsStopSecurityOption4 `security:"option"`
	Option5 *CalendarChannelsStopSecurityOption5 `security:"option"`
}

type CalendarChannelsStopRequest struct {
	QueryParams CalendarChannelsStopQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    CalendarChannelsStopSecurity
}

type CalendarChannelsStopResponse struct {
	ContentType string
	StatusCode  int64
}
