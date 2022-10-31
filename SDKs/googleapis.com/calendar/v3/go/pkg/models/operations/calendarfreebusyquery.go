package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarFreebusyQueryQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarFreebusyQuerySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarFreebusyQuerySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarFreebusyQuerySecurity struct {
	Option1 *CalendarFreebusyQuerySecurityOption1 `security:"option"`
	Option2 *CalendarFreebusyQuerySecurityOption2 `security:"option"`
}

type CalendarFreebusyQueryRequest struct {
	QueryParams CalendarFreebusyQueryQueryParams
	Request     *shared.FreeBusyRequest `request:"mediaType=application/json"`
	Security    CalendarFreebusyQuerySecurity
}

type CalendarFreebusyQueryResponse struct {
	ContentType      string
	FreeBusyResponse *shared.FreeBusyResponse
	StatusCode       int64
}
