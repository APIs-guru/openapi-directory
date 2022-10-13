package operations

import (
	"openapi/pkg/models/shared"
)

type CalendarACLGetPathParams struct {
	CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
	RuleID     string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type CalendarACLGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type CalendarACLGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarACLGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CalendarACLGetSecurity struct {
	Option1 *CalendarACLGetSecurityOption1 `security:"option"`
	Option2 *CalendarACLGetSecurityOption2 `security:"option"`
}

type CalendarACLGetRequest struct {
	PathParams  CalendarACLGetPathParams
	QueryParams CalendarACLGetQueryParams
	Security    CalendarACLGetSecurity
}

type CalendarACLGetResponse struct {
	ACLRule     *shared.ACLRule
	ContentType string
	StatusCode  int64
}
