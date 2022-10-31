package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesAppProfilesListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigtableadminProjectsInstancesAppProfilesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigtableadminProjectsInstancesAppProfilesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesAppProfilesListSecurity struct {
    Option1 *BigtableadminProjectsInstancesAppProfilesListSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesAppProfilesListSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesAppProfilesListSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesAppProfilesListSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesAppProfilesListSecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsInstancesAppProfilesListSecurityOption6 `security:"option"`
    
}

type BigtableadminProjectsInstancesAppProfilesListRequest struct {
    PathParams BigtableadminProjectsInstancesAppProfilesListPathParams 
    QueryParams BigtableadminProjectsInstancesAppProfilesListQueryParams 
    Security BigtableadminProjectsInstancesAppProfilesListSecurity 
    
}

type BigtableadminProjectsInstancesAppProfilesListResponse struct {
    ContentType string 
    ListAppProfilesResponse *shared.ListAppProfilesResponse 
    StatusCode int64 
    
}

