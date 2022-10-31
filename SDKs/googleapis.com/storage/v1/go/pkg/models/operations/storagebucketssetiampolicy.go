package operations

import (
"openapi/pkg/models/shared")

type StorageBucketsSetIamPolicyPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}

type StorageBucketsSetIamPolicyQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageBucketsSetIamPolicySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketsSetIamPolicySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketsSetIamPolicySecurity struct {
    Option1 *StorageBucketsSetIamPolicySecurityOption1 `security:"option"`
    Option2 *StorageBucketsSetIamPolicySecurityOption2 `security:"option"`
    
}

type StorageBucketsSetIamPolicyRequest struct {
    PathParams StorageBucketsSetIamPolicyPathParams 
    QueryParams StorageBucketsSetIamPolicyQueryParams 
    Request *shared.Policy `request:"mediaType=application/json"`
    Security StorageBucketsSetIamPolicySecurity 
    
}

type StorageBucketsSetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

