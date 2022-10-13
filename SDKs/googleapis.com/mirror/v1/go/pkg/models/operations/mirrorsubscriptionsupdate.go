package operations

import (
	"openapi/pkg/models/shared"
)

type MirrorSubscriptionsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MirrorSubscriptionsUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type MirrorSubscriptionsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MirrorSubscriptionsUpdateRequest struct {
	PathParams  MirrorSubscriptionsUpdatePathParams
	QueryParams MirrorSubscriptionsUpdateQueryParams
	Request     *shared.Subscription `request:"mediaType=application/json"`
	Security    MirrorSubscriptionsUpdateSecurity
}

type MirrorSubscriptionsUpdateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
