package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorTimelinePatchPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MirrorTimelinePatchQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorTimelinePatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorTimelinePatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorTimelinePatchSecurity struct {
	Option1 *MirrorTimelinePatchSecurityOption1 `security:"option"`
	Option2 *MirrorTimelinePatchSecurityOption2 `security:"option"`
}

type MirrorTimelinePatchRequest struct {
	PathParams  MirrorTimelinePatchPathParams
	QueryParams MirrorTimelinePatchQueryParams
	Request     *shared.TimelineItem `request:"mediaType=application/json"`
	Security    MirrorTimelinePatchSecurity
}

type MirrorTimelinePatchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
