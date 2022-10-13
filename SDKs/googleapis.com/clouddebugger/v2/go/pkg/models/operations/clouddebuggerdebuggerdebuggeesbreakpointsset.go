package operations

import (
	"openapi/pkg/models/shared"
)

type ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams struct {
	DebuggeeID string `pathParam:"style=simple,explode=false,name=debuggeeId"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum string

const (
	ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnumCanaryOptionUnspecified ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum = "CANARY_OPTION_UNSPECIFIED"
	ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnumCanaryOptionTryEnable   ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum = "CANARY_OPTION_TRY_ENABLE"
	ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnumCanaryOptionTryDisable  ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum = "CANARY_OPTION_TRY_DISABLE"
)

type ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                       `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                               `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                       `queryParam:"style=form,explode=true,name=callback"`
	CanaryOption   *ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum `queryParam:"style=form,explode=true,name=canaryOption"`
	ClientVersion  *string                                                       `queryParam:"style=form,explode=true,name=clientVersion"`
	Fields         *string                                                       `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity struct {
	Option1 *ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 `security:"option"`
	Option2 *ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 `security:"option"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest struct {
	PathParams  ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams
	QueryParams ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams
	Request     *shared.Breakpoint `request:"mediaType=application/json"`
	Security    ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity
}

type ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse struct {
	ContentType           string
	SetBreakpointResponse *shared.SetBreakpointResponse
	StatusCode            int64
}
