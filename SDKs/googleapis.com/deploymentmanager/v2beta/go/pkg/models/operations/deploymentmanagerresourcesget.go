package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerResourcesGetPathParams struct {
	Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
	Project    string `pathParam:"style=simple,explode=false,name=project"`
	Resource   string `pathParam:"style=simple,explode=false,name=resource"`
}

type DeploymentmanagerResourcesGetQueryParams struct {
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

type DeploymentmanagerResourcesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesGetSecurity struct {
	Option1 *DeploymentmanagerResourcesGetSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerResourcesGetSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerResourcesGetSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerResourcesGetSecurityOption4 `security:"option"`
}

type DeploymentmanagerResourcesGetRequest struct {
	PathParams  DeploymentmanagerResourcesGetPathParams
	QueryParams DeploymentmanagerResourcesGetQueryParams
	Security    DeploymentmanagerResourcesGetSecurity
}

type DeploymentmanagerResourcesGetResponse struct {
	ContentType string
	Resource    *shared.Resource
	StatusCode  int64
}
