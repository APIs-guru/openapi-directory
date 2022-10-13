package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerOperationsListPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DeploymentmanagerOperationsListQueryParams struct {
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

type DeploymentmanagerOperationsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerOperationsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerOperationsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerOperationsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerOperationsListSecurity struct {
	Option1 *DeploymentmanagerOperationsListSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerOperationsListSecurityOption2 `security:"option"`
	Option3 *DeploymentmanagerOperationsListSecurityOption3 `security:"option"`
	Option4 *DeploymentmanagerOperationsListSecurityOption4 `security:"option"`
}

type DeploymentmanagerOperationsListRequest struct {
	PathParams  DeploymentmanagerOperationsListPathParams
	QueryParams DeploymentmanagerOperationsListQueryParams
	Security    DeploymentmanagerOperationsListSecurity
}

type DeploymentmanagerOperationsListResponse struct {
	ContentType            string
	OperationsListResponse *shared.OperationsListResponse
	StatusCode             int64
}
