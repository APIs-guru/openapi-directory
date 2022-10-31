package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesSessionsStreamingReadPathParams struct {
    Session string `pathParam:"style=simple,explode=false,name=session"`
    
}

type SpannerProjectsInstancesDatabasesSessionsStreamingReadQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesSessionsStreamingReadRequest struct {
    PathParams SpannerProjectsInstancesDatabasesSessionsStreamingReadPathParams 
    QueryParams SpannerProjectsInstancesDatabasesSessionsStreamingReadQueryParams 
    Request *shared.ReadRequest `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesDatabasesSessionsStreamingReadSecurity 
    
}

type SpannerProjectsInstancesDatabasesSessionsStreamingReadResponse struct {
    ContentType string 
    PartialResultSet *shared.PartialResultSet 
    StatusCode int64 
    
}

