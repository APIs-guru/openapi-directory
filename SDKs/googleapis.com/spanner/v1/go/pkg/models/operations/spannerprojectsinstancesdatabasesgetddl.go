package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesDatabasesGetDdlPathParams struct {
    Database string `pathParam:"style=simple,explode=false,name=database"`
    
}

type SpannerProjectsInstancesDatabasesGetDdlQueryParams struct {
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

type SpannerProjectsInstancesDatabasesGetDdlSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesGetDdlSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesDatabasesGetDdlSecurity struct {
    Option1 *SpannerProjectsInstancesDatabasesGetDdlSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesDatabasesGetDdlSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesDatabasesGetDdlRequest struct {
    PathParams SpannerProjectsInstancesDatabasesGetDdlPathParams 
    QueryParams SpannerProjectsInstancesDatabasesGetDdlQueryParams 
    Security SpannerProjectsInstancesDatabasesGetDdlSecurity 
    
}

type SpannerProjectsInstancesDatabasesGetDdlResponse struct {
    ContentType string 
    GetDatabaseDdlResponse *shared.GetDatabaseDdlResponse 
    StatusCode int64 
    
}

