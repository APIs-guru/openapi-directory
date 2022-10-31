package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsGetQueryParams struct {
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

type IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity struct {
	Option1 *IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption1 `security:"option"`
	Option2 *IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurityOption2 `security:"option"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest struct {
	PathParams  IdentitytoolkitProjectsTenantsOauthIdpConfigsGetPathParams
	QueryParams IdentitytoolkitProjectsTenantsOauthIdpConfigsGetQueryParams
	Security    IdentitytoolkitProjectsTenantsOauthIdpConfigsGetSecurity
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse struct {
	ContentType                                     string
	GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
	StatusCode                                      int64
}
