package operations

import (
	"openapi/pkg/models/shared"
)

type ReplicapoolPoolsListPathParams struct {
	ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
	Zone        string `pathParam:"style=simple,explode=false,name=zone"`
}

type ReplicapoolPoolsListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type ReplicapoolPoolsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ReplicapoolPoolsListSecurity struct {
	Option1 *ReplicapoolPoolsListSecurityOption1 `security:"option"`
	Option2 *ReplicapoolPoolsListSecurityOption2 `security:"option"`
	Option3 *ReplicapoolPoolsListSecurityOption3 `security:"option"`
	Option4 *ReplicapoolPoolsListSecurityOption4 `security:"option"`
	Option5 *ReplicapoolPoolsListSecurityOption5 `security:"option"`
	Option6 *ReplicapoolPoolsListSecurityOption6 `security:"option"`
}

type ReplicapoolPoolsListRequest struct {
	PathParams  ReplicapoolPoolsListPathParams
	QueryParams ReplicapoolPoolsListQueryParams
	Security    ReplicapoolPoolsListSecurity
}

type ReplicapoolPoolsListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
