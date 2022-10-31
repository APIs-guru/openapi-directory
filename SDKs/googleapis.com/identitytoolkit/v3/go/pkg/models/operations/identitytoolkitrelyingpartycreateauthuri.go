package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitRelyingpartyCreateAuthURIQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type IdentitytoolkitRelyingpartyCreateAuthURISecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitRelyingpartyCreateAuthURIRequest struct {
	QueryParams IdentitytoolkitRelyingpartyCreateAuthURIQueryParams
	Request     *shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest `request:"mediaType=application/json"`
	Security    IdentitytoolkitRelyingpartyCreateAuthURISecurity
}

type IdentitytoolkitRelyingpartyCreateAuthURIResponse struct {
	ContentType           string
	CreateAuthURIResponse *shared.CreateAuthURIResponse
	StatusCode            int64
}
