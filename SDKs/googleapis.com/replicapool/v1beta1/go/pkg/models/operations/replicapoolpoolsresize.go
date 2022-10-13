package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicapoolPoolsResizePathParams struct {
	PoolName    string `pathParam:"style=simple,explode=false,name=poolName"`
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
	Zone        string `pathParam:"style=simple,explode=false,name=zone"`
}

type ReplicapoolPoolsResizeQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	NumReplicas *int64          `queryParam:"style=form,explode=true,name=numReplicas"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type ReplicapoolPoolsResizeSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsResizeSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsResizeSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsResizeSecurity struct {
	Option1 *ReplicapoolPoolsResizeSecurityOption1 `security:"option"`
	Option2 *ReplicapoolPoolsResizeSecurityOption2 `security:"option"`
	Option3 *ReplicapoolPoolsResizeSecurityOption3 `security:"option"`
}

type ReplicapoolPoolsResizeRequest struct {
	PathParams  ReplicapoolPoolsResizePathParams
	QueryParams ReplicapoolPoolsResizeQueryParams
	Security    ReplicapoolPoolsResizeSecurity
}

type ReplicapoolPoolsResizeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
