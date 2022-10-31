package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsListProjectionEnum string

const (
	StorageBucketsListProjectionEnumFull  StorageBucketsListProjectionEnum = "full"
	StorageBucketsListProjectionEnumNoACL StorageBucketsListProjectionEnum = "noAcl"
)

type StorageBucketsListQueryParams struct {
	Alt         *shared.AltEnum                   `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string                           `queryParam:"style=form,explode=true,name=fields"`
	Key         *string                           `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64                            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string                           `queryParam:"style=form,explode=true,name=pageToken"`
	Prefix      *string                           `queryParam:"style=form,explode=true,name=prefix"`
	PrettyPrint *bool                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Project     string                            `queryParam:"style=form,explode=true,name=project"`
	Projection  *StorageBucketsListProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser   *string                           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType  *string                           `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP      *string                           `queryParam:"style=form,explode=true,name=userIp"`
	UserProject *string                           `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageBucketsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsListSecurity struct {
	Option1 *StorageBucketsListSecurityOption1 `security:"option"`
	Option2 *StorageBucketsListSecurityOption2 `security:"option"`
	Option3 *StorageBucketsListSecurityOption3 `security:"option"`
	Option4 *StorageBucketsListSecurityOption4 `security:"option"`
	Option5 *StorageBucketsListSecurityOption5 `security:"option"`
}

type StorageBucketsListRequest struct {
	QueryParams StorageBucketsListQueryParams
	Security    StorageBucketsListSecurity
}

type StorageBucketsListResponse struct {
	Buckets     *shared.Buckets
	ContentType string
	StatusCode  int64
}
