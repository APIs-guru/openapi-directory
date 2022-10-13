package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerTypeProvidersGetTypePathParams struct {
	Project      string `pathParam:"style=simple,explode=false,name=project"`
	Type         string `pathParam:"style=simple,explode=false,name=type"`
	TypeProvider string `pathParam:"style=simple,explode=false,name=typeProvider"`
}

type DeploymentmanagerTypeProvidersGetTypeQueryParams struct {
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

type DeploymentmanagerTypeProvidersGetTypeSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetTypeSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetTypeSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetTypeSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetTypeSecurity struct {
	Option1 *DeploymentmanagerTypeProvidersGetTypeSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerTypeProvidersGetTypeSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerTypeProvidersGetTypeSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerTypeProvidersGetTypeSecurityOption4 `security:"option"`
}

type DeploymentmanagerTypeProvidersGetTypeRequest struct {
	PathParams  DeploymentmanagerTypeProvidersGetTypePathParams
	QueryParams DeploymentmanagerTypeProvidersGetTypeQueryParams
	Security    DeploymentmanagerTypeProvidersGetTypeSecurity
}

type DeploymentmanagerTypeProvidersGetTypeResponse struct {
	ContentType string
	StatusCode  int64
	TypeInfo    *shared.TypeInfo
}
