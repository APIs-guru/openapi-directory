package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesSetIamPolicyPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams struct {
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

type BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicySecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsInstancesTablesSetIamPolicySecurityOption6 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicyRequest struct {
    PathParams BigtableadminProjectsInstancesTablesSetIamPolicyPathParams 
    QueryParams BigtableadminProjectsInstancesTablesSetIamPolicyQueryParams 
    Request *shared.SetIamPolicyRequest `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesSetIamPolicySecurity 
    
}

type BigtableadminProjectsInstancesTablesSetIamPolicyResponse struct {
    ContentType string 
    Policy *shared.Policy 
    StatusCode int64 
    
}

