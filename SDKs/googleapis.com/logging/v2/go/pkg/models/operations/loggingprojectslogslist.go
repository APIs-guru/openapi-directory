package operations

import (
"openapi/pkg/models/shared")

type LoggingProjectsLogsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type LoggingProjectsLogsListQueryParams struct {
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
    ResourceNames []string `queryParam:"style=form,explode=true,name=resourceNames"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type LoggingProjectsLogsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLogsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLogsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLogsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLogsListSecurity struct {
    Option1 *LoggingProjectsLogsListSecurityOption1 `security:"option"`
    Option2 *LoggingProjectsLogsListSecurityOption2 `security:"option"`
    Option3 *LoggingProjectsLogsListSecurityOption3 `security:"option"`
    Option4 *LoggingProjectsLogsListSecurityOption4 `security:"option"`
    
}

type LoggingProjectsLogsListRequest struct {
    PathParams LoggingProjectsLogsListPathParams 
    QueryParams LoggingProjectsLogsListQueryParams 
    Security LoggingProjectsLogsListSecurity 
    
}

type LoggingProjectsLogsListResponse struct {
    ContentType string 
    ListLogsResponse *shared.ListLogsResponse 
    StatusCode int64 
    
}

