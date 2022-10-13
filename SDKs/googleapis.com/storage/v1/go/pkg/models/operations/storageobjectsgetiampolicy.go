package operations

import (
	"openapi/pkg/models/shared"
)

type StorageObjectsGetIamPolicyPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type StorageObjectsGetIamPolicyQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Generation  *string         `queryParam:"style=form,explode=true,name=generation"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType  *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageObjectsGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetIamPolicySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetIamPolicySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetIamPolicySecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsGetIamPolicySecurity struct {
	Option1 *StorageObjectsGetIamPolicySecurityOption1 `security:"option"`
	Option2 *StorageObjectsGetIamPolicySecurityOption2 `security:"option"`
	Option3 *StorageObjectsGetIamPolicySecurityOption3 `security:"option"`
	Option4 *StorageObjectsGetIamPolicySecurityOption4 `security:"option"`
	Option5 *StorageObjectsGetIamPolicySecurityOption5 `security:"option"`
}

type StorageObjectsGetIamPolicyRequest struct {
	PathParams  StorageObjectsGetIamPolicyPathParams
	QueryParams StorageObjectsGetIamPolicyQueryParams
	Security    StorageObjectsGetIamPolicySecurity
}

type StorageObjectsGetIamPolicyResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
