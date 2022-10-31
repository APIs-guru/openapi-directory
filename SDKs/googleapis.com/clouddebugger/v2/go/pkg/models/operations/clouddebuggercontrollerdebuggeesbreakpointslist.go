package operations

import (
"openapi/pkg/models/shared")

type ClouddebuggerControllerDebuggeesBreakpointsListPathParams struct {
    DebuggeeID string `pathParam:"style=simple,explode=false,name=debuggeeId"`
    
}

type ClouddebuggerControllerDebuggeesBreakpointsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    AgentID *string `queryParam:"style=form,explode=true,name=agentId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SuccessOnTimeout *bool `queryParam:"style=form,explode=true,name=successOnTimeout"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    WaitToken *string `queryParam:"style=form,explode=true,name=waitToken"`
    
}

type ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClouddebuggerControllerDebuggeesBreakpointsListSecurity struct {
    Option1 *ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 `security:"option"`
    Option2 *ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 `security:"option"`
    
}

type ClouddebuggerControllerDebuggeesBreakpointsListRequest struct {
    PathParams ClouddebuggerControllerDebuggeesBreakpointsListPathParams 
    QueryParams ClouddebuggerControllerDebuggeesBreakpointsListQueryParams 
    Security ClouddebuggerControllerDebuggeesBreakpointsListSecurity 
    
}

type ClouddebuggerControllerDebuggeesBreakpointsListResponse struct {
    ContentType string 
    ListActiveBreakpointsResponse *shared.ListActiveBreakpointsResponse 
    StatusCode int64 
    
}

