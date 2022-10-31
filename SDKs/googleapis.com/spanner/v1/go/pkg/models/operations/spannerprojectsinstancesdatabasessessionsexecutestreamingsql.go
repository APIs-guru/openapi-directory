package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLPathParams struct {
    Session string `pathParam:"style=simple,explode=false,name=session"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLRequest struct {
    PathParams SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLPathParams 
    QueryParams SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLQueryParams 
    Request *shared.ExecuteSQLRequest `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLSecurity 
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSQLResponse struct {
    ContentType string 
    PartialResultSet *shared.PartialResultSet 
    StatusCode int64 
    
}

