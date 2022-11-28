package operations

import (
	"openapi/pkg/models/shared"
)

type TagmanagerAccountsContainersSnippetPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type TagmanagerAccountsContainersSnippetQueryParams struct {
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

type TagmanagerAccountsContainersSnippetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersSnippetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TagmanagerAccountsContainersSnippetSecurity struct {
	Option1 *TagmanagerAccountsContainersSnippetSecurityOption1 `security:"option"`
	Option2 *TagmanagerAccountsContainersSnippetSecurityOption2 `security:"option"`
}

type TagmanagerAccountsContainersSnippetRequest struct {
	PathParams  TagmanagerAccountsContainersSnippetPathParams
	QueryParams TagmanagerAccountsContainersSnippetQueryParams
	Security    TagmanagerAccountsContainersSnippetSecurity
}

type TagmanagerAccountsContainersSnippetResponse struct {
	ContentType                 string
	GetContainerSnippetResponse *shared.GetContainerSnippetResponse
	StatusCode                  int64
}
