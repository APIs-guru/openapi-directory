package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorLocationsGetPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MirrorLocationsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorLocationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorLocationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorLocationsGetSecurity struct {
	Option1 *MirrorLocationsGetSecurityOption1 `security:"option"`
	Option2 *MirrorLocationsGetSecurityOption2 `security:"option"`
}

type MirrorLocationsGetRequest struct {
	PathParams  MirrorLocationsGetPathParams
	QueryParams MirrorLocationsGetQueryParams
	Security    MirrorLocationsGetSecurity
}

type MirrorLocationsGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
