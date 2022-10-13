package operations

import (
	"openapi/pkg/models/shared"
)

type ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams struct {
	DebuggeeID string `pathParam:"style=simple,explode=false,name=debuggeeId"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum string

const (
	ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnumCapture ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum = "CAPTURE"
	ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnumLog     ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum = "LOG"
)

type ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams struct {
	DollarXgafv     *shared.XgafvEnum                                             `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                                                       `queryParam:"style=form,explode=true,name=access_token"`
	ActionValue     *ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum `queryParam:"style=form,explode=true,name=action.value"`
	Alt             *shared.AltEnum                                               `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                                                       `queryParam:"style=form,explode=true,name=callback"`
	ClientVersion   *string                                                       `queryParam:"style=form,explode=true,name=clientVersion"`
	Fields          *string                                                       `queryParam:"style=form,explode=true,name=fields"`
	IncludeAllUsers *bool                                                         `queryParam:"style=form,explode=true,name=includeAllUsers"`
	IncludeInactive *bool                                                         `queryParam:"style=form,explode=true,name=includeInactive"`
	Key             *string                                                       `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string                                                       `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool                                                         `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string                                                       `queryParam:"style=form,explode=true,name=quotaUser"`
	StripResults    *bool                                                         `queryParam:"style=form,explode=true,name=stripResults"`
	UploadType      *string                                                       `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                                                       `queryParam:"style=form,explode=true,name=upload_protocol"`
	WaitToken       *string                                                       `queryParam:"style=form,explode=true,name=waitToken"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity struct {
	Option1 *ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 `security:"option"`
	Option2 *ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 `security:"option"`
}

type ClouddebuggerDebuggerDebuggeesBreakpointsListRequest struct {
	PathParams  ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams
	QueryParams ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams
	Security    ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity
}

type ClouddebuggerDebuggerDebuggeesBreakpointsListResponse struct {
	ContentType             string
	ListBreakpointsResponse *shared.ListBreakpointsResponse
	StatusCode              int64
}
