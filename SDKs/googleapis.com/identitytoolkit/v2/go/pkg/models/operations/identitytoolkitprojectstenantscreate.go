package operations

import (
	"openapi/pkg/models/shared"
)

type IdentitytoolkitProjectsTenantsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type IdentitytoolkitProjectsTenantsCreateQueryParams struct {
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

type IdentitytoolkitProjectsTenantsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IdentitytoolkitProjectsTenantsCreateSecurity struct {
	Option1 *IdentitytoolkitProjectsTenantsCreateSecurityOption1 `security:"option"`
	Option2 *IdentitytoolkitProjectsTenantsCreateSecurityOption2 `security:"option"`
}

type IdentitytoolkitProjectsTenantsCreateRequest struct {
	PathParams  IdentitytoolkitProjectsTenantsCreatePathParams
	QueryParams IdentitytoolkitProjectsTenantsCreateQueryParams
	Request     *shared.GoogleCloudIdentitytoolkitAdminV2TenantInput `request:"mediaType=application/json"`
	Security    IdentitytoolkitProjectsTenantsCreateSecurity
}

type IdentitytoolkitProjectsTenantsCreateResponse struct {
	ContentType                             string
	GoogleCloudIdentitytoolkitAdminV2Tenant *shared.GoogleCloudIdentitytoolkitAdminV2Tenant
	StatusCode                              int64
}
