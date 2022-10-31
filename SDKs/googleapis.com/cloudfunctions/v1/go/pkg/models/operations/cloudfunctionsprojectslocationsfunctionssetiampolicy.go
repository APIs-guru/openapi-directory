package operations

import (
"openapi/pkg/models/shared")

type CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams struct {
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

type CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudfunctionsProjectsLocationsFunctionsSetIamPolicyRequest struct {
    PathParams CloudfunctionsProjectsLocationsFunctionsSetIamPolicyPathParams 
    QueryParams CloudfunctionsProjectsLocationsFunctionsSetIamPolicyQueryParams 
    Request *shared.SetIamPolicyRequest `request:"mediaType=application/json"`
    Security CloudfunctionsProjectsLocationsFunctionsSetIamPolicySecurity 
    
}

type CloudfunctionsProjectsLocationsFunctionsSetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

