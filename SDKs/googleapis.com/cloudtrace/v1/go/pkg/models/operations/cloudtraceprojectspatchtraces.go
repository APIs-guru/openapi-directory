package operations

import (
"openapi/pkg/models/shared")

type CloudtraceProjectsPatchTracesPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type CloudtraceProjectsPatchTracesQueryParams struct {
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

type CloudtraceProjectsPatchTracesSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsPatchTracesSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CloudtraceProjectsPatchTracesSecurity struct {
    Option1 *CloudtraceProjectsPatchTracesSecurityOption1 `security:"option"`
    Option2 *CloudtraceProjectsPatchTracesSecurityOption2 `security:"option"`
    
}

type CloudtraceProjectsPatchTracesRequest struct {
    PathParams CloudtraceProjectsPatchTracesPathParams 
    QueryParams CloudtraceProjectsPatchTracesQueryParams 
    Request *shared.Traces `request:"mediaType=application/json"`
    Security CloudtraceProjectsPatchTracesSecurity 
    
}

type CloudtraceProjectsPatchTracesResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

