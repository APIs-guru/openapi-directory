package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams struct {
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

type BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsRequest struct {
    PathParams BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams 
    QueryParams BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams 
    Request *shared.TestIamPermissionsRequest `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity 
    
}

type BigtableadminProjectsInstancesTablesTestIamPermissionsResponse struct {
    ContentType string 
    StatusCode int64 
    TestIamPermissionsResponse *shared.TestIamPermissionsResponse 
    
}

