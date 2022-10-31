package operations

import (
	"openapi/pkg/models/shared"
)

type ClouddebuggerDebuggerDebuggeesListQueryParams struct {
	DollarXgafv     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string           `queryParam:"style=form,explode=true,name=callback"`
	ClientVersion   *string           `queryParam:"style=form,explode=true,name=clientVersion"`
	Fields          *string           `queryParam:"style=form,explode=true,name=fields"`
	IncludeInactive *bool             `queryParam:"style=form,explode=true,name=includeInactive"`
	Key             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Project         *string           `queryParam:"style=form,explode=true,name=project"`
	QuotaUser       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClouddebuggerDebuggerDebuggeesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerDebuggerDebuggeesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClouddebuggerDebuggerDebuggeesListSecurity struct {
	Option1 *ClouddebuggerDebuggerDebuggeesListSecurityOption1 `security:"option"`
	Option2 *ClouddebuggerDebuggerDebuggeesListSecurityOption2 `security:"option"`
}

type ClouddebuggerDebuggerDebuggeesListRequest struct {
	QueryParams ClouddebuggerDebuggerDebuggeesListQueryParams
	Security    ClouddebuggerDebuggerDebuggeesListSecurity
}

type ClouddebuggerDebuggerDebuggeesListResponse struct {
	ContentType           string
	ListDebuggeesResponse *shared.ListDebuggeesResponse
	StatusCode            int64
}
