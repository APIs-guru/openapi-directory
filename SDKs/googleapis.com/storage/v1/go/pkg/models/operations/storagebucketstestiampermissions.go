package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsTestIamPermissionsPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsTestIamPermissionsQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	Permissions []string        `queryParam:"style=form,explode=true,name=permissions"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType  *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageBucketsTestIamPermissionsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsTestIamPermissionsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsTestIamPermissionsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsTestIamPermissionsSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsTestIamPermissionsSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsTestIamPermissionsSecurity struct {
	Option1 *StorageBucketsTestIamPermissionsSecurityOption1 `security:"option"`
	Option2 *StorageBucketsTestIamPermissionsSecurityOption2 `security:"option"`
	Option3 *StorageBucketsTestIamPermissionsSecurityOption3 `security:"option"`
	Option4 *StorageBucketsTestIamPermissionsSecurityOption4 `security:"option"`
	Option5 *StorageBucketsTestIamPermissionsSecurityOption5 `security:"option"`
}

type StorageBucketsTestIamPermissionsRequest struct {
	PathParams  StorageBucketsTestIamPermissionsPathParams
	QueryParams StorageBucketsTestIamPermissionsQueryParams
	Security    StorageBucketsTestIamPermissionsSecurity
}

type StorageBucketsTestIamPermissionsResponse struct {
	ContentType                string
	StatusCode                 int64
	TestIamPermissionsResponse *shared.TestIamPermissionsResponse
}
