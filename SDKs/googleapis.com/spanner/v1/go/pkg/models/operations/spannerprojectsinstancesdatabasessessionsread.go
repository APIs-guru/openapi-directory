package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesSessionsReadPathParams struct {
    Session string `pathParam:"style=simple,explode=false,name=session"`
    
}

type SpannerProjectsInstancesDatabasesSessionsReadQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsReadSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsReadSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsReadSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesSessionsReadSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesSessionsReadSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesSessionsReadRequest struct {
    PathParams SpannerProjectsInstancesDatabasesSessionsReadPathParams 
    QueryParams SpannerProjectsInstancesDatabasesSessionsReadQueryParams 
    Request *shared.ReadRequest `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesDatabasesSessionsReadSecurity 
    
}

type SpannerProjectsInstancesDatabasesSessionsReadResponse struct {
    ContentType string 
    ResultSet *shared.ResultSet 
    StatusCode int64 
    
}

