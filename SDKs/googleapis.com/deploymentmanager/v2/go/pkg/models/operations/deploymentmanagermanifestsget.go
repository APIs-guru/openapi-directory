package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerManifestsGetPathParams struct {
	Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
	Manifest   string `pathParam:"style=simple,explode=false,name=manifest"`
	Project    string `pathParam:"style=simple,explode=false,name=project"`
}

type DeploymentmanagerManifestsGetQueryParams struct {
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

type DeploymentmanagerManifestsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsGetSecurity struct {
	Option1 *DeploymentmanagerManifestsGetSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerManifestsGetSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerManifestsGetSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerManifestsGetSecurityOption4 `security:"option"`
}

type DeploymentmanagerManifestsGetRequest struct {
	PathParams  DeploymentmanagerManifestsGetPathParams
	QueryParams DeploymentmanagerManifestsGetQueryParams
	Security    DeploymentmanagerManifestsGetSecurity
}

type DeploymentmanagerManifestsGetResponse struct {
	ContentType string
	Manifest    *shared.Manifest
	StatusCode  int64
}
