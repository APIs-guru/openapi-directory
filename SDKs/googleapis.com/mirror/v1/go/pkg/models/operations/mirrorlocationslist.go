package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorLocationsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorLocationsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorLocationsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorLocationsListSecurity struct {
	Option1 *MirrorLocationsListSecurityOption1 `security:"option"`
	Option2 *MirrorLocationsListSecurityOption2 `security:"option"`
}

type MirrorLocationsListRequest struct {
	QueryParams MirrorLocationsListQueryParams
	Security    MirrorLocationsListSecurity
}

type MirrorLocationsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
