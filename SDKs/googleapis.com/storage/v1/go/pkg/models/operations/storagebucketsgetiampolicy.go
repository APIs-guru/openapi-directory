package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsGetIamPolicyPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsGetIamPolicyQueryParams struct {
	Alt                           *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                        *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                           *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                    *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	OptionsRequestedPolicyVersion *int64          `queryParam:"style=form,explode=true,name=optionsRequestedPolicyVersion"`
	PrettyPrint                   *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                    *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                        *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject                   *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageBucketsGetIamPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsGetIamPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsGetIamPolicySecurity struct {
	Option1 *StorageBucketsGetIamPolicySecurityOption1 `security:"option"`
	Option2 *StorageBucketsGetIamPolicySecurityOption2 `security:"option"`
}

type StorageBucketsGetIamPolicyRequest struct {
	PathParams  StorageBucketsGetIamPolicyPathParams
	QueryParams StorageBucketsGetIamPolicyQueryParams
	Security    StorageBucketsGetIamPolicySecurity
}

type StorageBucketsGetIamPolicyResponse struct {
	ContentType string
	Policy      *shared.Policy
	StatusCode  int64
}
