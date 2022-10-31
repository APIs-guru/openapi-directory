package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesSessionsBatchCreatePathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBatchCreateQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBatchCreateRequest struct {
    PathParams SpannerProjectsInstancesDatabasesSessionsBatchCreatePathParams 
    QueryParams SpannerProjectsInstancesDatabasesSessionsBatchCreateQueryParams 
    Request *shared.BatchCreateSessionsRequest `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesDatabasesSessionsBatchCreateSecurity 
    
}

type SpannerProjectsInstancesDatabasesSessionsBatchCreateResponse struct {
    BatchCreateSessionsResponse *shared.BatchCreateSessionsResponse 
    ContentType string 
    StatusCode int64 
    
}

