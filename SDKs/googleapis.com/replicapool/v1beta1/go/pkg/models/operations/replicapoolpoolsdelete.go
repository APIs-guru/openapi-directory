package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicapoolPoolsDeletePathParams struct {
	PoolName    string `pathParam:"style=simple,explode=false,name=poolName"`
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
	Zone        string `pathParam:"style=simple,explode=false,name=zone"`
}

type ReplicapoolPoolsDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type ReplicapoolPoolsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsDeleteSecurity struct {
	Option1 *ReplicapoolPoolsDeleteSecurityOption1 `security:"option"`
	Option2 *ReplicapoolPoolsDeleteSecurityOption2 `security:"option"`
	Option3 *ReplicapoolPoolsDeleteSecurityOption3 `security:"option"`
}

type ReplicapoolPoolsDeleteRequest struct {
	PathParams  ReplicapoolPoolsDeletePathParams
	QueryParams ReplicapoolPoolsDeleteQueryParams
	Request     *shared.PoolsDeleteRequest `request:"mediaType=application/json"`
	Security    ReplicapoolPoolsDeleteSecurity
}

type ReplicapoolPoolsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
