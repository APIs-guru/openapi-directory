package operations

import (
"openapi/pkg/models/shared")

type LoggingProjectsLocationsListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type LoggingProjectsLocationsListQueryParams struct {
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

type LoggingProjectsLocationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsListSecurity struct {
    Option1 *LoggingProjectsLocationsListSecurityOption1 `security:"option"`
    Option2 *LoggingProjectsLocationsListSecurityOption2 `security:"option"`
    Option3 *LoggingProjectsLocationsListSecurityOption3 `security:"option"`
    Option4 *LoggingProjectsLocationsListSecurityOption4 `security:"option"`
    
}

type LoggingProjectsLocationsListRequest struct {
    PathParams LoggingProjectsLocationsListPathParams 
    QueryParams LoggingProjectsLocationsListQueryParams 
    Security LoggingProjectsLocationsListSecurity 
    
}

type LoggingProjectsLocationsListResponse struct {
    ContentType string 
    ListLocationsResponse *shared.ListLocationsResponse 
    StatusCode int64 
    
}

