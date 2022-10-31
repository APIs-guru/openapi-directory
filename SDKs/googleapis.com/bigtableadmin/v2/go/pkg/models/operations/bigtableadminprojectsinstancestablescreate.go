package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigtableadminProjectsInstancesTablesCreateQueryParams struct {
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

type BigtableadminProjectsInstancesTablesCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesCreateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesCreateSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesCreateSecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesCreateSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesCreateSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesCreateSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesCreateSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesCreateSecurityOption5 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesCreateRequest struct {
    PathParams BigtableadminProjectsInstancesTablesCreatePathParams 
    QueryParams BigtableadminProjectsInstancesTablesCreateQueryParams 
    Request *shared.CreateTableRequest `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesCreateSecurity 
    
}

type BigtableadminProjectsInstancesTablesCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Table *shared.Table 
    
}

