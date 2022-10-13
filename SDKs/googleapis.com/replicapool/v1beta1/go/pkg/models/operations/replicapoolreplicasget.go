package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicapoolReplicasGetPathParams struct {
	PoolName    string `pathParam:"style=simple,explode=false,name=poolName"`
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
	ReplicaName string `pathParam:"style=simple,explode=false,name=replicaName"`
	Zone        string `pathParam:"style=simple,explode=false,name=zone"`
}

type ReplicapoolReplicasGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type ReplicapoolReplicasGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolReplicasGetSecurity struct {
	Option1 *ReplicapoolReplicasGetSecurityOption1 `security:"option"`
	Option2 *ReplicapoolReplicasGetSecurityOption2 `security:"option"`
	Option3 *ReplicapoolReplicasGetSecurityOption3 `security:"option"`
	Option4 *ReplicapoolReplicasGetSecurityOption4 `security:"option"`
	Option5 *ReplicapoolReplicasGetSecurityOption5 `security:"option"`
	Option6 *ReplicapoolReplicasGetSecurityOption6 `security:"option"`
}

type ReplicapoolReplicasGetRequest struct {
	PathParams  ReplicapoolReplicasGetPathParams
	QueryParams ReplicapoolReplicasGetQueryParams
	Security    ReplicapoolReplicasGetSecurity
}

type ReplicapoolReplicasGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
