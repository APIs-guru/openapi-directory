package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerTypeProvidersPatchPathParams struct {
	Project      string `pathParam:"style=simple,explode=false,name=project"`
	TypeProvider string `pathParam:"style=simple,explode=false,name=typeProvider"`
}

type DeploymentmanagerTypeProvidersPatchQueryParams struct {
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

type DeploymentmanagerTypeProvidersPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersPatchSecurity struct {
	Option1 *DeploymentmanagerTypeProvidersPatchSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerTypeProvidersPatchSecurityOption2 `security:"option"`
}

type DeploymentmanagerTypeProvidersPatchRequest struct {
	PathParams  DeploymentmanagerTypeProvidersPatchPathParams
	QueryParams DeploymentmanagerTypeProvidersPatchQueryParams
	Request     *shared.TypeProvider `request:"mediaType=application/json"`
	Security    DeploymentmanagerTypeProvidersPatchSecurity
}

type DeploymentmanagerTypeProvidersPatchResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
