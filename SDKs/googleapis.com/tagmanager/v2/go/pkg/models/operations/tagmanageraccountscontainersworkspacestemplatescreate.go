package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersWorkspacesTemplatesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type TagmanagerAccountsContainersWorkspacesTemplatesCreateQueryParams struct {
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

type TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersWorkspacesTemplatesCreateRequest struct {
	PathParams  TagmanagerAccountsContainersWorkspacesTemplatesCreatePathParams
	QueryParams TagmanagerAccountsContainersWorkspacesTemplatesCreateQueryParams
	Request     *shared.CustomTemplate `request:"mediaType=application/json"`
	Security    TagmanagerAccountsContainersWorkspacesTemplatesCreateSecurity
}

type TagmanagerAccountsContainersWorkspacesTemplatesCreateResponse struct {
	ContentType    string
	CustomTemplate *shared.CustomTemplate
	StatusCode     int64
}
