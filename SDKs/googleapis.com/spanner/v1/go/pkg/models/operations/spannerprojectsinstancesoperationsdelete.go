package operations

import (
"openapi/pkg/models/shared")

type SpannerProjectsInstancesOperationsDeletePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type SpannerProjectsInstancesOperationsDeleteQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Etag *string `queryParam:"style=form,explode=true,name=etag"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    ValidateOnly *bool `queryParam:"style=form,explode=true,name=validateOnly"`
    
}

type SpannerProjectsInstancesOperationsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesOperationsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type SpannerProjectsInstancesOperationsDeleteSecurity struct {
    Option1 *SpannerProjectsInstancesOperationsDeleteSecurityOption1 `security:"option"`
    Option2 *SpannerProjectsInstancesOperationsDeleteSecurityOption2 `security:"option"`
    
}

type SpannerProjectsInstancesOperationsDeleteRequest struct {
    PathParams SpannerProjectsInstancesOperationsDeletePathParams 
    QueryParams SpannerProjectsInstancesOperationsDeleteQueryParams 
    Security SpannerProjectsInstancesOperationsDeleteSecurity 
    
}

type SpannerProjectsInstancesOperationsDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

