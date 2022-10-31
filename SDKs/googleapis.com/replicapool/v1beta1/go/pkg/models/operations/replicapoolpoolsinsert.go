package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicapoolPoolsInsertPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
	Zone        string `pathParam:"style=simple,explode=false,name=zone"`
}

type ReplicapoolPoolsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type ReplicapoolPoolsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsInsertSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsInsertSecurity struct {
	Option1 *ReplicapoolPoolsInsertSecurityOption1 `security:"option"`
	Option2 *ReplicapoolPoolsInsertSecurityOption2 `security:"option"`
	Option3 *ReplicapoolPoolsInsertSecurityOption3 `security:"option"`
}

type ReplicapoolPoolsInsertRequest struct {
	PathParams  ReplicapoolPoolsInsertPathParams
	QueryParams ReplicapoolPoolsInsertQueryParams
	Request     *shared.Pool `request:"mediaType=application/json"`
	Security    ReplicapoolPoolsInsertSecurity
}

type ReplicapoolPoolsInsertResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
