package operations

import (
	"openapi/pkg/models/shared"
)

type Oauth2UserinfoGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type Oauth2UserinfoGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Oauth2UserinfoGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Oauth2UserinfoGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Oauth2UserinfoGetSecurity struct {
	Option1 *Oauth2UserinfoGetSecurityOption1 `security:"option"`
	Option2 *Oauth2UserinfoGetSecurityOption2 `security:"option"`
	Option3 *Oauth2UserinfoGetSecurityOption3 `security:"option"`
}

type Oauth2UserinfoGetRequest struct {
	QueryParams Oauth2UserinfoGetQueryParams
	Security    Oauth2UserinfoGetSecurity
}

type Oauth2UserinfoGetResponse struct {
	ContentType string
	StatusCode  int64
	Userinfo    *shared.Userinfo
}
