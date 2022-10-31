package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentmanagerDeploymentsInsertPathParams struct {
	Project string `pathParam:"style=simple,explode=false,name=project"`
}

type DeploymentmanagerDeploymentsInsertCreatePolicyEnum string

const (
	DeploymentmanagerDeploymentsInsertCreatePolicyEnumCreateOrAcquire DeploymentmanagerDeploymentsInsertCreatePolicyEnum = "CREATE_OR_ACQUIRE"
	DeploymentmanagerDeploymentsInsertCreatePolicyEnumAcquire         DeploymentmanagerDeploymentsInsertCreatePolicyEnum = "ACQUIRE"
)

type DeploymentmanagerDeploymentsInsertQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                             `queryParam:"style=form,explode=true,name=callback"`
	CreatePolicy   *DeploymentmanagerDeploymentsInsertCreatePolicyEnum `queryParam:"style=form,explode=true,name=createPolicy"`
	Fields         *string                                             `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	Preview        *bool                                               `queryParam:"style=form,explode=true,name=preview"`
	QuotaUser      *string                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DeploymentmanagerDeploymentsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerDeploymentsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DeploymentmanagerDeploymentsInsertSecurity struct {
	Option1 *DeploymentmanagerDeploymentsInsertSecurityOption1 `security:"option"`
	Option2 *DeploymentmanagerDeploymentsInsertSecurityOption2 `security:"option"`
}

type DeploymentmanagerDeploymentsInsertRequest struct {
	PathParams  DeploymentmanagerDeploymentsInsertPathParams
	QueryParams DeploymentmanagerDeploymentsInsertQueryParams
	Request     *shared.Deployment `request:"mediaType=application/json"`
	Security    DeploymentmanagerDeploymentsInsertSecurity
}

type DeploymentmanagerDeploymentsInsertResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
