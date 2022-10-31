package operations

import (
"openapi/pkg/models/shared")

type LoggingProjectsLocationsBucketsViewsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type LoggingProjectsLocationsBucketsViewsListQueryParams struct {
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

type LoggingProjectsLocationsBucketsViewsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsViewsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsViewsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsViewsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsViewsListSecurity struct {
    Option1 *LoggingProjectsLocationsBucketsViewsListSecurityOption1 `security:"option"`
    Option2 *LoggingProjectsLocationsBucketsViewsListSecurityOption2 `security:"option"`
    Option3 *LoggingProjectsLocationsBucketsViewsListSecurityOption3 `security:"option"`
    Option4 *LoggingProjectsLocationsBucketsViewsListSecurityOption4 `security:"option"`
    
}

type LoggingProjectsLocationsBucketsViewsListRequest struct {
    PathParams LoggingProjectsLocationsBucketsViewsListPathParams 
    QueryParams LoggingProjectsLocationsBucketsViewsListQueryParams 
    Security LoggingProjectsLocationsBucketsViewsListSecurity 
    
}

type LoggingProjectsLocationsBucketsViewsListResponse struct {
    ContentType string 
    ListViewsResponse *shared.ListViewsResponse 
    StatusCode int64 
    
}

