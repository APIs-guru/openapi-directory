package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams struct {
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

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurityOption5 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesRequest struct {
    PathParams BigtableadminProjectsInstancesTablesModifyColumnFamiliesPathParams 
    QueryParams BigtableadminProjectsInstancesTablesModifyColumnFamiliesQueryParams 
    Request *shared.ModifyColumnFamiliesRequest `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesModifyColumnFamiliesSecurity 
    
}

type BigtableadminProjectsInstancesTablesModifyColumnFamiliesResponse struct {
    ContentType string 
    StatusCode int64 
    Table *shared.Table 
    
}

