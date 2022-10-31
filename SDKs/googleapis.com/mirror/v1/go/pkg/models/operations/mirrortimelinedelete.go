package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorTimelineDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MirrorTimelineDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorTimelineDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorTimelineDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorTimelineDeleteSecurity struct {
	Option1 *MirrorTimelineDeleteSecurityOption1 `security:"option"`
	Option2 *MirrorTimelineDeleteSecurityOption2 `security:"option"`
}

type MirrorTimelineDeleteRequest struct {
	PathParams  MirrorTimelineDeletePathParams
	QueryParams MirrorTimelineDeleteQueryParams
	Security    MirrorTimelineDeleteSecurity
}

type MirrorTimelineDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
