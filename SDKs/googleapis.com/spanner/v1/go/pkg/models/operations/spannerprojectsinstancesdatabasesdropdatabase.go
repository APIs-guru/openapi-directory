package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesDropDatabasePathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    
}

type SpannerProjectsInstancesDatabasesDropDatabaseQueryParams struct {
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

type SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesDropDatabaseSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesDropDatabaseRequest struct {
    PathParams SpannerProjectsInstancesDatabasesDropDatabasePathParams 
    QueryParams SpannerProjectsInstancesDatabasesDropDatabaseQueryParams 
    Security SpannerProjectsInstancesDatabasesDropDatabaseSecurity 
    
}

type SpannerProjectsInstancesDatabasesDropDatabaseResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

