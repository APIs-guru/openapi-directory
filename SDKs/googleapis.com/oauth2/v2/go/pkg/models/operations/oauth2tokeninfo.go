package operations

import (
	"openapi/pkg/models/shared"
)

type Oauth2TokeninfoQueryParams struct {
	AccessToken *string         `queryParam:"style=form,explode=true,name=access_token"`
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	IDToken     *string         `queryParam:"style=form,explode=true,name=id_token"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type Oauth2TokeninfoRequest struct {
	QueryParams Oauth2TokeninfoQueryParams
}

type Oauth2TokeninfoResponse struct {
	ContentType string
	StatusCode  int64
	Tokeninfo   *shared.Tokeninfo
}
