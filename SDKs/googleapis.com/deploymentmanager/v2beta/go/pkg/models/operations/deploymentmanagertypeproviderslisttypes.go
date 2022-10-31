package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerTypeProvidersListTypesPathParams struct {
	Project      string `pathParam:"style=simple,explode=false,name=project"`
	TypeProvider string `pathParam:"style=simple,explode=false,name=typeProvider"`
}

type DeploymentmanagerTypeProvidersListTypesQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string           `queryParam:"style=form,explode=true,name=orderBy"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DeploymentmanagerTypeProvidersListTypesSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersListTypesSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersListTypesSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersListTypesSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerTypeProvidersListTypesSecurity struct {
	Option1 *DeploymentmanagerTypeProvidersListTypesSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerTypeProvidersListTypesSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerTypeProvidersListTypesSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerTypeProvidersListTypesSecurityOption4 `security:"option"`
}

type DeploymentmanagerTypeProvidersListTypesRequest struct {
	PathParams  DeploymentmanagerTypeProvidersListTypesPathParams
	QueryParams DeploymentmanagerTypeProvidersListTypesQueryParams
	Security    DeploymentmanagerTypeProvidersListTypesSecurity
}

type DeploymentmanagerTypeProvidersListTypesResponse struct {
	ContentType                    string
	StatusCode                     int64
	TypeProvidersListTypesResponse *shared.TypeProvidersListTypesResponse
}
