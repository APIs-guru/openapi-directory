package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerTypeProvidersDeletePathParams struct {
	Project      string `pathParam:"style=simple,explode=false,name=project"`
	TypeProvider string `pathParam:"style=simple,explode=false,name=typeProvider"`
}

type DeploymentmanagerTypeProvidersDeleteQueryParams struct {
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

type DeploymentmanagerTypeProvidersDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersDeleteSecurity struct {
	Option1 *DeploymentmanagerTypeProvidersDeleteSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerTypeProvidersDeleteSecurityOption2 `security:"option"`
}

type DeploymentmanagerTypeProvidersDeleteRequest struct {
	PathParams  DeploymentmanagerTypeProvidersDeletePathParams
	QueryParams DeploymentmanagerTypeProvidersDeleteQueryParams
	Security    DeploymentmanagerTypeProvidersDeleteSecurity
}

type DeploymentmanagerTypeProvidersDeleteResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
