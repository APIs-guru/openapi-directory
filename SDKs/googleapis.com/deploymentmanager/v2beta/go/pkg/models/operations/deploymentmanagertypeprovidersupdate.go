package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerTypeProvidersUpdatePathParams struct {
	Project      string `pathParam:"style=simple,explode=false,name=project"`
	TypeProvider string `pathParam:"style=simple,explode=false,name=typeProvider"`
}

type DeploymentmanagerTypeProvidersUpdateQueryParams struct {
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

type DeploymentmanagerTypeProvidersUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersUpdateSecurity struct {
	Option1 *DeploymentmanagerTypeProvidersUpdateSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerTypeProvidersUpdateSecurityOption2 `security:"option"`
}

type DeploymentmanagerTypeProvidersUpdateRequest struct {
	PathParams  DeploymentmanagerTypeProvidersUpdatePathParams
	QueryParams DeploymentmanagerTypeProvidersUpdateQueryParams
	Request     *shared.TypeProvider `request:"mediaType=application/json"`
	Security    DeploymentmanagerTypeProvidersUpdateSecurity
}

type DeploymentmanagerTypeProvidersUpdateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
