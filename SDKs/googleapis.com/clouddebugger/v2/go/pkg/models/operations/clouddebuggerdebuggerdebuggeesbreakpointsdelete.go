package operations

import (
"openapi/pkg/models/shared")

type ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams struct {
    BreakpointID string `pathParam:"style=simple,explode=false,name=breakpointId"`
    DebuggeeID string `pathParam:"style=simple,explode=false,name=debuggeeId"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams struct {
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

type ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity struct {
    Option1 *ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption1 `security:"option"`
    Option2 *ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurityOption2 `security:"option"`
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsDeleteRequest struct {
    PathParams ClouddebuggerDebuggerDebuggeesBreakpointsDeletePathParams 
    QueryParams ClouddebuggerDebuggerDebuggeesBreakpointsDeleteQueryParams 
    Security ClouddebuggerDebuggerDebuggeesBreakpointsDeleteSecurity 
    
}

type ClouddebuggerDebuggerDebuggeesBreakpointsDeleteResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

