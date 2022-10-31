package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerTypesGetPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
	Type    string `pathParam:"style=simple,explode=false,name=type"`
}

type DeploymentmanagerTypesGetQueryParams struct {
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

type DeploymentmanagerTypesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypesGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypesGetSecurity struct {
	Option1 *DeploymentmanagerTypesGetSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerTypesGetSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerTypesGetSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerTypesGetSecurityOption4 `security:"option"`
}

type DeploymentmanagerTypesGetRequest struct {
	PathParams  DeploymentmanagerTypesGetPathParams
	QueryParams DeploymentmanagerTypesGetQueryParams
	Security    DeploymentmanagerTypesGetSecurity
}

type DeploymentmanagerTypesGetResponse struct {
	ContentType string
	StatusCode  int64
	Type        *shared.Type
}
