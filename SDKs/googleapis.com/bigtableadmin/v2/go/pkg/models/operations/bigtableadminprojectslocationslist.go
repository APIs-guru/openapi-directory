package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsLocationsListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigtableadminProjectsLocationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigtableadminProjectsLocationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsLocationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsLocationsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsLocationsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsLocationsListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsLocationsListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsLocationsListSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsLocationsListSecurity struct {
    Option1 *BigtableadminProjectsLocationsListSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsLocationsListSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsLocationsListSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsLocationsListSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsLocationsListSecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsLocationsListSecurityOption6 `security:"option"`
    Option7 *BigtableadminProjectsLocationsListSecurityOption7 `security:"option"`
    
}

type BigtableadminProjectsLocationsListRequest struct {
    PathParams BigtableadminProjectsLocationsListPathParams 
    QueryParams BigtableadminProjectsLocationsListQueryParams 
    Security BigtableadminProjectsLocationsListSecurity 
    
}

type BigtableadminProjectsLocationsListResponse struct {
    ContentType string 
    ListLocationsResponse *shared.ListLocationsResponse 
    StatusCode int64 
    
}

