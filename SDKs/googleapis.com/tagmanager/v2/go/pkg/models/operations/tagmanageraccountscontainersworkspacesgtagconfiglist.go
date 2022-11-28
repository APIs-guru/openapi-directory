package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity struct {
	Option1 *TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersWorkspacesGtagConfigListSecurityOption2 `security:"option"`
}

type TagmanagerAccountsContainersWorkspacesGtagConfigListRequest struct {
	PathParams  TagmanagerAccountsContainersWorkspacesGtagConfigListPathParams
	QueryParams TagmanagerAccountsContainersWorkspacesGtagConfigListQueryParams
	Security    TagmanagerAccountsContainersWorkspacesGtagConfigListSecurity
}

type TagmanagerAccountsContainersWorkspacesGtagConfigListResponse struct {
	ContentType            string
	ListGtagConfigResponse *shared.ListGtagConfigResponse
	StatusCode             int64
}
