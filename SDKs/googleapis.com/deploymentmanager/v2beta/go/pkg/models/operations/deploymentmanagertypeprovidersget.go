package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerTypeProvidersGetPathParams struct {
	Project      string `pathParam:"style=simple,explode=false,name=project"`
	TypeProvider string `pathParam:"style=simple,explode=false,name=typeProvider"`
}

type DeploymentmanagerTypeProvidersGetQueryParams struct {
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

type DeploymentmanagerTypeProvidersGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersGetSecurity struct {
	Option1 *DeploymentmanagerTypeProvidersGetSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerTypeProvidersGetSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerTypeProvidersGetSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerTypeProvidersGetSecurityOption4 `security:"option"`
}

type DeploymentmanagerTypeProvidersGetRequest struct {
	PathParams  DeploymentmanagerTypeProvidersGetPathParams
	QueryParams DeploymentmanagerTypeProvidersGetQueryParams
	Security    DeploymentmanagerTypeProvidersGetSecurity
}

type DeploymentmanagerTypeProvidersGetResponse struct {
	ContentType  string
	StatusCode   int64
	TypeProvider *shared.TypeProvider
}
