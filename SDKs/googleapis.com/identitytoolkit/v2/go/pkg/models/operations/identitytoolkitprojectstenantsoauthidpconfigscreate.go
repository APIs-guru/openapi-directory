package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams struct {
	DollarXgafv      *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields           *string           `queryParam:"style=form,explode=true,name=fields"`
	Key              *string           `queryParam:"style=form,explode=true,name=key"`
	OauthIdpConfigID *string           `queryParam:"style=form,explode=true,name=oauthIdpConfigId"`
	OauthToken       *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint      *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType       *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity struct {
	Option1 *IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption1 `security:"option"`
	Option2 *IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurityOption2 `security:"option"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest struct {
	PathParams  IdentitytoolkitProjectsTenantsOauthIdpConfigsCreatePathParams
	QueryParams IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateQueryParams
	Request     *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig `request:"mediaType=application/json"`
	Security    IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateSecurity
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse struct {
	ContentType                                     string
	GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
	StatusCode                                      int64
}
