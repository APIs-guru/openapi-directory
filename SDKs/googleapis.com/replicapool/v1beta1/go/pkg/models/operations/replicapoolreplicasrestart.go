package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicapoolReplicasRestartPathParams struct {
	PoolName    string `pathParam:"style=simple,explode=false,name=poolName"`
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
	ReplicaName string `pathParam:"style=simple,explode=false,name=replicaName"`
	Zone        string `pathParam:"style=simple,explode=false,name=zone"`
}

type ReplicapoolReplicasRestartQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type ReplicapoolReplicasRestartSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasRestartSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasRestartSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasRestartSecurity struct {
	Option1 *ReplicapoolReplicasRestartSecurityOption1 `security:"option"`
	Option2 *ReplicapoolReplicasRestartSecurityOption2 `security:"option"`
	Option3 *ReplicapoolReplicasRestartSecurityOption3 `security:"option"`
}

type ReplicapoolReplicasRestartRequest struct {
	PathParams  ReplicapoolReplicasRestartPathParams
	QueryParams ReplicapoolReplicasRestartQueryParams
	Security    ReplicapoolReplicasRestartSecurity
}

type ReplicapoolReplicasRestartResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
