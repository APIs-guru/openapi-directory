package operations

import (
"openapi/pkg/models/shared")

type CloudtraceProjectsTracesGetPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    TraceID string `pathParam:"style=simple,explode=false,name=traceId"`
    
}

type CloudtraceProjectsTracesGetQueryParams struct {
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

type CloudtraceProjectsTracesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTracesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsTracesGetSecurity struct {
    Option1 *CloudtraceProjectsTracesGetSecurityOption1 `security:"option"`
    Option2 *CloudtraceProjectsTracesGetSecurityOption2 `security:"option"`
    
}

type CloudtraceProjectsTracesGetRequest struct {
    PathParams CloudtraceProjectsTracesGetPathParams 
    QueryParams CloudtraceProjectsTracesGetQueryParams 
    Security CloudtraceProjectsTracesGetSecurity 
    
}

type CloudtraceProjectsTracesGetResponse struct {
    ContentType string 
    StatusCode int64 
    Trace *shared.Trace 
    
}

