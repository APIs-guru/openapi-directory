package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesUndeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigtableadminProjectsInstancesTablesUndeleteQueryParams struct {
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

type BigtableadminProjectsInstancesTablesUndeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesUndeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesUndeleteSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesUndeleteSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesUndeleteSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesUndeleteSecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesUndeleteSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesUndeleteSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesUndeleteSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesUndeleteSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesUndeleteSecurityOption5 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesUndeleteRequest struct {
    PathParams BigtableadminProjectsInstancesTablesUndeletePathParams 
    QueryParams BigtableadminProjectsInstancesTablesUndeleteQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesUndeleteSecurity 
    
}

type BigtableadminProjectsInstancesTablesUndeleteResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

