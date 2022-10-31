package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity struct {
	Option1 *IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption1 `security:"option"`
	Option2 *IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurityOption2 `security:"option"`
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest struct {
	PathParams  IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchPathParams
	QueryParams IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchQueryParams
	Request     *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig `request:"mediaType=application/json"`
	Security    IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchSecurity
}

type IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse struct {
	ContentType                                     string
	GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig *shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
	StatusCode                                      int64
}
