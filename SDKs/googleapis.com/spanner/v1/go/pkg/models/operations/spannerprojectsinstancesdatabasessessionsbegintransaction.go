package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesSessionsBeginTransactionPathParams struct {
    Session string `pathParam:"style=simple,explode=false,name=session"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBeginTransactionQueryParams struct {
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

type SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesSessionsBeginTransactionRequest struct {
    PathParams SpannerProjectsInstancesDatabasesSessionsBeginTransactionPathParams 
    QueryParams SpannerProjectsInstancesDatabasesSessionsBeginTransactionQueryParams 
    Request *shared.BeginTransactionRequest `request:"mediaType=application/json"`
    Security SpannerProjectsInstancesDatabasesSessionsBeginTransactionSecurity 
    
}

type SpannerProjectsInstancesDatabasesSessionsBeginTransactionResponse struct {
    ContentType string 
    StatusCode int64 
    Transaction *shared.Transaction 
    
}

