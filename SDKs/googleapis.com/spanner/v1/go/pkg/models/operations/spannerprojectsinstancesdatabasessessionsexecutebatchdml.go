package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams struct {
    Session string `pathParam:"style=simple,explode=false,name=session"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlRequest struct {
    PathParams SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlPathParams 
    QueryParams SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlQueryParams 
    Request *shared.ExecuteBatchDmlRequest `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlSecurity 
    
}

type SpannerProjectsInstancesDatabasesSessionsExecuteBatchDmlResponse struct {
    ContentType string 
    ExecuteBatchDmlResponse *shared.ExecuteBatchDmlResponse 
    StatusCode int64 
    
}

