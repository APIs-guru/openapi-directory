package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesDropRowRangePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeQueryParams struct {
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

type BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeSecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesDropRowRangeSecurityOption5 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeRequest struct {
    PathParams BigtableadminProjectsInstancesTablesDropRowRangePathParams 
    QueryParams BigtableadminProjectsInstancesTablesDropRowRangeQueryParams 
    Request *shared.DropRowRangeRequest `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesDropRowRangeSecurity 
    
}

type BigtableadminProjectsInstancesTablesDropRowRangeResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

