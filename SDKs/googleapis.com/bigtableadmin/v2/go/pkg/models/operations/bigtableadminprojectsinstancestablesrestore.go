package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesRestorePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigtableadminProjectsInstancesTablesRestoreQueryParams struct {
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

type BigtableadminProjectsInstancesTablesRestoreSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesRestoreSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesRestoreSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesRestoreSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesRestoreSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesRestoreSecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesRestoreSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesRestoreSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesRestoreSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesRestoreSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesRestoreSecurityOption5 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesRestoreRequest struct {
    PathParams BigtableadminProjectsInstancesTablesRestorePathParams 
    QueryParams BigtableadminProjectsInstancesTablesRestoreQueryParams 
    Request *shared.RestoreTableRequest `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesRestoreSecurity 
    
}

type BigtableadminProjectsInstancesTablesRestoreResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

