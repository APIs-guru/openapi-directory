package operations

import (
	"openapi/pkg/models/shared"
)

type ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams struct {
	DebuggeeID string `pathParam:"style=simple,explode=false,name=debuggeeId"`
	ID         string `pathParam:"style=simple,explode=false,name=id"`
}

type ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity struct {
	Option1 *ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1 `security:"option"`
	Option2 *ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2 `security:"option"`
}

type ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest struct {
	PathParams  ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams
	QueryParams ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams
	Request     *shared.UpdateActiveBreakpointRequest `request:"mediaType=application/json"`
	Security    ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity
}

type ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse struct {
	ContentType                    string
	StatusCode                     int64
	UpdateActiveBreakpointResponse map[string]interface{}
}
