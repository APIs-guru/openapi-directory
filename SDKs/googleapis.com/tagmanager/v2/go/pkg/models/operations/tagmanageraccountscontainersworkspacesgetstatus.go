package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersWorkspacesGetStatusPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type TagmanagerAccountsContainersWorkspacesGetStatusQueryParams struct {
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

type TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersWorkspacesGetStatusSecurity struct {
	Option1 *TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersWorkspacesGetStatusSecurityOption2 `security:"option"`
}

type TagmanagerAccountsContainersWorkspacesGetStatusRequest struct {
	PathParams  TagmanagerAccountsContainersWorkspacesGetStatusPathParams
	QueryParams TagmanagerAccountsContainersWorkspacesGetStatusQueryParams
	Security    TagmanagerAccountsContainersWorkspacesGetStatusSecurity
}

type TagmanagerAccountsContainersWorkspacesGetStatusResponse struct {
	ContentType                string
	GetWorkspaceStatusResponse *shared.GetWorkspaceStatusResponse
	StatusCode                 int64
}
