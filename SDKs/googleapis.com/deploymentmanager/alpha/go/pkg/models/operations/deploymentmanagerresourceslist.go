package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerResourcesListPathParams struct {
	Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
	Project    string `pathParam:"style=simple,explode=false,name=project"`
}

type DeploymentmanagerResourcesListQueryParams struct {
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

type DeploymentmanagerResourcesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerResourcesListSecurity struct {
	Option1 *DeploymentmanagerResourcesListSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerResourcesListSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerResourcesListSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerResourcesListSecurityOption4 `security:"option"`
}

type DeploymentmanagerResourcesListRequest struct {
	PathParams  DeploymentmanagerResourcesListPathParams
	QueryParams DeploymentmanagerResourcesListQueryParams
	Security    DeploymentmanagerResourcesListSecurity
}

type DeploymentmanagerResourcesListResponse struct {
	ContentType           string
	ResourcesListResponse *shared.ResourcesListResponse
	StatusCode            int64
}
