package operations

import (
"openapi/pkg/models/shared")

type ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams struct {
    BreakpointID string `pathParam:"style=simple,explode=false,name=breakpointId"`
    DebuggeeID string `pathParam:"style=simple,explode=false,name=debuggeeId"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ClientVersion *string `queryParam:"style=form,explode=true,name=clientVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity struct {
    Option1 *ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1 `security:"option"`
    Option2 *ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2 `security:"option"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest struct {
    PathParams ClouddebuggerDebuggerDebuggeesBreakpointsGetPathParams 
    QueryParams ClouddebuggerDebuggerDebuggeesBreakpointsGetQueryParams 
    Security ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity 
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse struct {
    ContentType string 
    GetBreakpointResponse *shared.GetBreakpointResponse 
    StatusCode int64 
    
}

