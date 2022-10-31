package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarSettingsWatchQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	SyncToken   *string         `queryParam:"style=form,explode=true,name=syncToken"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarSettingsWatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarSettingsWatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarSettingsWatchSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarSettingsWatchSecurity struct {
	Option1 *CalendarSettingsWatchSecurityOption1 `security:"option"`
	Option2 *CalendarSettingsWatchSecurityOption2 `security:"option"`
	Option3 *CalendarSettingsWatchSecurityOption3 `security:"option"`
}

type CalendarSettingsWatchRequest struct {
	QueryParams CalendarSettingsWatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    CalendarSettingsWatchSecurity
}

type CalendarSettingsWatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
