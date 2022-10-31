package operations

import (
	"openapi/pkg/models/shared"
)

type ContainerProjectsZonesClustersNodePoolsRollbackPathParams struct {
	ClusterID  string `pathParam:"style=simple,explode=false,name=clusterId"`
	NodePoolID string `pathParam:"style=simple,explode=false,name=nodePoolId"`
	ProjectID  string `pathParam:"style=simple,explode=false,name=projectId"`
	Zone       string `pathParam:"style=simple,explode=false,name=zone"`
}

type ContainerProjectsZonesClustersNodePoolsRollbackQueryParams struct {
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

type ContainerProjectsZonesClustersNodePoolsRollbackSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContainerProjectsZonesClustersNodePoolsRollbackRequest struct {
	PathParams  ContainerProjectsZonesClustersNodePoolsRollbackPathParams
	QueryParams ContainerProjectsZonesClustersNodePoolsRollbackQueryParams
	Request     *shared.RollbackNodePoolUpgradeRequest `request:"mediaType=application/json"`
	Security    ContainerProjectsZonesClustersNodePoolsRollbackSecurity
}

type ContainerProjectsZonesClustersNodePoolsRollbackResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
