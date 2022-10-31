package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesGetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams struct {
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

type BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicySecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsInstancesTablesGetIamPolicySecurityOption6 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicyRequest struct {
    PathParams BigtableadminProjectsInstancesTablesGetIamPolicyPathParams 
    QueryParams BigtableadminProjectsInstancesTablesGetIamPolicyQueryParams 
    Request *shared.GetIamPolicyRequest `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesGetIamPolicySecurity 
    
}

type BigtableadminProjectsInstancesTablesGetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

