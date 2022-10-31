package operations

import (
"openapi/pkg/models/shared")

type RuntimeconfigProjectsConfigsSetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type RuntimeconfigProjectsConfigsSetIamPolicyQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type RuntimeconfigProjectsConfigsSetIamPolicySecurity struct {
    Option1 *RuntimeconfigProjectsConfigsSetIamPolicySecurityOption1 `security:"option"`
    Option2 *RuntimeconfigProjectsConfigsSetIamPolicySecurityOption2 `security:"option"`
    
}

type RuntimeconfigProjectsConfigsSetIamPolicyRequest struct {
    PathParams RuntimeconfigProjectsConfigsSetIamPolicyPathParams 
    QueryParams RuntimeconfigProjectsConfigsSetIamPolicyQueryParams 
    Request *shared.SetIamPolicyRequest `request:"mediaType=application/json"`
    Security RuntimeconfigProjectsConfigsSetIamPolicySecurity 
    
}

type RuntimeconfigProjectsConfigsSetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

