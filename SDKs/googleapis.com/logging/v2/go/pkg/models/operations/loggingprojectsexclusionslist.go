package operations

import (
"openapi/pkg/models/shared")

type LoggingProjectsExclusionsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type LoggingProjectsExclusionsListQueryParams struct {
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

type LoggingProjectsExclusionsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsExclusionsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsExclusionsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsExclusionsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsExclusionsListSecurity struct {
    Option1 *LoggingProjectsExclusionsListSecurityOption1 `security:"option"`
    Option2 *LoggingProjectsExclusionsListSecurityOption2 `security:"option"`
    Option3 *LoggingProjectsExclusionsListSecurityOption3 `security:"option"`
    Option4 *LoggingProjectsExclusionsListSecurityOption4 `security:"option"`
    
}

type LoggingProjectsExclusionsListRequest struct {
    PathParams LoggingProjectsExclusionsListPathParams 
    QueryParams LoggingProjectsExclusionsListQueryParams 
    Security LoggingProjectsExclusionsListSecurity 
    
}

type LoggingProjectsExclusionsListResponse struct {
    ContentType string 
    ListExclusionsResponse *shared.ListExclusionsResponse 
    StatusCode int64 
    
}

