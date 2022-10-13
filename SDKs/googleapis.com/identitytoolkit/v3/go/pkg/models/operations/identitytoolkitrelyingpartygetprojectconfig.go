package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitRelyingpartyGetProjectConfigQueryParams struct {
	Alt                    *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	DelegatedProjectNumber *string         `queryParam:"style=form,explode=true,name=delegatedProjectNumber"`
	Fields                 *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint            *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProjectNumber          *string         `queryParam:"style=form,explode=true,name=projectNumber"`
	QuotaUser              *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP                 *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type IdentitytoolkitRelyingpartyGetProjectConfigSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitRelyingpartyGetProjectConfigRequest struct {
	QueryParams IdentitytoolkitRelyingpartyGetProjectConfigQueryParams
	Security    IdentitytoolkitRelyingpartyGetProjectConfigSecurity
}

type IdentitytoolkitRelyingpartyGetProjectConfigResponse struct {
	ContentType                                         string
	IdentitytoolkitRelyingpartyGetProjectConfigResponse *shared.IdentitytoolkitRelyingpartyGetProjectConfigResponse
	StatusCode                                          int64
}
