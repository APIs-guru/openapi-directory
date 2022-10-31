package operations

import (
"openapi/pkg/models/shared")

type CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams struct {
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

type CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity struct {
    Option1 *CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption1 `security:"option"`
    Option2 *CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurityOption2 `security:"option"`
    
}

type CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyRequest struct {
    PathParams CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyPathParams 
    QueryParams CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyQueryParams 
    Request *shared.GetIamPolicyRequest `request:"mediaType=application/json"`
    Security CloudiotProjectsLocationsRegistriesGroupsGetIamPolicySecurity 
    
}

type CloudiotProjectsLocationsRegistriesGroupsGetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

