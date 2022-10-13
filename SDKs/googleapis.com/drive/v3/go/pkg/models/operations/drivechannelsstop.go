package operations

import (
	"openapi/pkg/models/shared"
)

type DriveChannelsStopQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type DriveChannelsStopSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChannelsStopSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChannelsStopSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChannelsStopSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChannelsStopSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChannelsStopSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChannelsStopSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DriveChannelsStopSecurity struct {
	Option1 *DriveChannelsStopSecurityOption1 `security:"option"`
	Option2 *DriveChannelsStopSecurityOption2 `security:"option"`
	Option3 *DriveChannelsStopSecurityOption3 `security:"option"`
	Option4 *DriveChannelsStopSecurityOption4 `security:"option"`
	Option5 *DriveChannelsStopSecurityOption5 `security:"option"`
	Option6 *DriveChannelsStopSecurityOption6 `security:"option"`
	Option7 *DriveChannelsStopSecurityOption7 `security:"option"`
}

type DriveChannelsStopRequest struct {
	QueryParams DriveChannelsStopQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    DriveChannelsStopSecurity
}

type DriveChannelsStopResponse struct {
	ContentType string
	StatusCode  int64
}
