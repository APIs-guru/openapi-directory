package operations

import (
"openapi/pkg/models/shared")

type LoggingProjectsLocationsBucketsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type LoggingProjectsLocationsBucketsListQueryParams struct {
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

type LoggingProjectsLocationsBucketsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type LoggingProjectsLocationsBucketsListSecurity struct {
    Option1 *LoggingProjectsLocationsBucketsListSecurityOption1 `security:"option"`
    Option2 *LoggingProjectsLocationsBucketsListSecurityOption2 `security:"option"`
    Option3 *LoggingProjectsLocationsBucketsListSecurityOption3 `security:"option"`
    Option4 *LoggingProjectsLocationsBucketsListSecurityOption4 `security:"option"`
    
}

type LoggingProjectsLocationsBucketsListRequest struct {
    PathParams LoggingProjectsLocationsBucketsListPathParams 
    QueryParams LoggingProjectsLocationsBucketsListQueryParams 
    Security LoggingProjectsLocationsBucketsListSecurity 
    
}

type LoggingProjectsLocationsBucketsListResponse struct {
    ContentType string 
    ListBucketsResponse *shared.ListBucketsResponse 
    StatusCode int64 
    
}

