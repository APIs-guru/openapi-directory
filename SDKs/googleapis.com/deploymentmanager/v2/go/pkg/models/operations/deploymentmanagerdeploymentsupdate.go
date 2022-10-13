package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerDeploymentsUpdatePathParams struct {
	Deployment string `pathParam:"style=simple,explode=false,name=deployment"`
	Project    string `pathParam:"style=simple,explode=false,name=project"`
}

type DeploymentmanagerDeploymentsUpdateCreatePolicyEnum string

const (
	DeploymentmanagerDeploymentsUpdateCreatePolicyEnumCreateOrAcquire DeploymentmanagerDeploymentsUpdateCreatePolicyEnum = "CREATE_OR_ACQUIRE"
	DeploymentmanagerDeploymentsUpdateCreatePolicyEnumAcquire         DeploymentmanagerDeploymentsUpdateCreatePolicyEnum = "ACQUIRE"
)

type DeploymentmanagerDeploymentsUpdateDeletePolicyEnum string

const (
	DeploymentmanagerDeploymentsUpdateDeletePolicyEnumDelete  DeploymentmanagerDeploymentsUpdateDeletePolicyEnum = "DELETE"
	DeploymentmanagerDeploymentsUpdateDeletePolicyEnumAbandon DeploymentmanagerDeploymentsUpdateDeletePolicyEnum = "ABANDON"
)

type DeploymentmanagerDeploymentsUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                             `queryParam:"style=form,explode=true,name=callback"`
	CreatePolicy   *DeploymentmanagerDeploymentsUpdateCreatePolicyEnum `queryParam:"style=form,explode=true,name=createPolicy"`
	DeletePolicy   *DeploymentmanagerDeploymentsUpdateDeletePolicyEnum `queryParam:"style=form,explode=true,name=deletePolicy"`
	Fields         *string                                             `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	Preview        *bool                                               `queryParam:"style=form,explode=true,name=preview"`
	QuotaUser      *string                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DeploymentmanagerDeploymentsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerDeploymentsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerDeploymentsUpdateSecurity struct {
	Option1 *DeploymentmanagerDeploymentsUpdateSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerDeploymentsUpdateSecurityOption2 `security:"option"`
}

type DeploymentmanagerDeploymentsUpdateRequest struct {
	PathParams  DeploymentmanagerDeploymentsUpdatePathParams
	QueryParams DeploymentmanagerDeploymentsUpdateQueryParams
	Request     *shared.Deployment `request:"mediaType=application/json"`
	Security    DeploymentmanagerDeploymentsUpdateSecurity
}

type DeploymentmanagerDeploymentsUpdateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
