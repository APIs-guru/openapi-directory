package operations

import (
	"openapi/pkg/models/shared"
)

type DataprocProjectsRegionsClustersPatchPathParams struct {
	ClusterName string `pathParam:"style=simple,explode=false,name=clusterName"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
	Region      string `pathParam:"style=simple,explode=false,name=region"`
}

type DataprocProjectsRegionsClustersPatchQueryParams struct {
	DollarXgafv                 *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                 *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                         *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                    *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                      *string           `queryParam:"style=form,explode=true,name=fields"`
	GracefulDecommissionTimeout *string           `queryParam:"style=form,explode=true,name=gracefulDecommissionTimeout"`
	Key                         *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                  *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                 *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                   *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID                   *string           `queryParam:"style=form,explode=true,name=requestId"`
	UpdateMask                  *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType                  *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol              *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataprocProjectsRegionsClustersPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataprocProjectsRegionsClustersPatchRequest struct {
	PathParams  DataprocProjectsRegionsClustersPatchPathParams
	QueryParams DataprocProjectsRegionsClustersPatchQueryParams
	Request     *shared.Cluster `request:"mediaType=application/json"`
	Security    DataprocProjectsRegionsClustersPatchSecurity
}

type DataprocProjectsRegionsClustersPatchResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
