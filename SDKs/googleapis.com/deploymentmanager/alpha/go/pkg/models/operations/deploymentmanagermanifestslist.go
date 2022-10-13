package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerManifestsListPathParams struct {
	Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
	Project    string `pathParam:"style=simple,explode=false,name=project"`
}

type DeploymentmanagerManifestsListQueryParams struct {
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

type DeploymentmanagerManifestsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerManifestsListSecurity struct {
	Option1 *DeploymentmanagerManifestsListSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerManifestsListSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerManifestsListSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerManifestsListSecurityOption4 `security:"option"`
}

type DeploymentmanagerManifestsListRequest struct {
	PathParams  DeploymentmanagerManifestsListPathParams
	QueryParams DeploymentmanagerManifestsListQueryParams
	Security    DeploymentmanagerManifestsListSecurity
}

type DeploymentmanagerManifestsListResponse struct {
	ContentType           string
	ManifestsListResponse *shared.ManifestsListResponse
	StatusCode            int64
}
