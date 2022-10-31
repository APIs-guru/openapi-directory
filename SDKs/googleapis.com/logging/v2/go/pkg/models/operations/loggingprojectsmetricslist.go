package operations

import (
"openapi/pkg/models/shared")

type LoggingProjectsMetricsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type LoggingProjectsMetricsListQueryParams struct {
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

type LoggingProjectsMetricsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsMetricsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsMetricsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsMetricsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsMetricsListSecurity struct {
    Option1 *LoggingProjectsMetricsListSecurityOption1 `security:"option"`
    Option2 *LoggingProjectsMetricsListSecurityOption2 `security:"option"`
    Option3 *LoggingProjectsMetricsListSecurityOption3 `security:"option"`
    Option4 *LoggingProjectsMetricsListSecurityOption4 `security:"option"`
    
}

type LoggingProjectsMetricsListRequest struct {
    PathParams LoggingProjectsMetricsListPathParams 
    QueryParams LoggingProjectsMetricsListQueryParams 
    Security LoggingProjectsMetricsListSecurity 
    
}

type LoggingProjectsMetricsListResponse struct {
    ContentType string 
    ListLogMetricsResponse *shared.ListLogMetricsResponse 
    StatusCode int64 
    
}

