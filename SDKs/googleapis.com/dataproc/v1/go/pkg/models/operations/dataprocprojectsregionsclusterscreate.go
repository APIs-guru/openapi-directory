package operations

import (
	"openapi/pkg/models/shared"
)

type DataprocProjectsRegionsClustersCreatePathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	Region    string `pathParam:"style=simple,explode=false,name=region"`
}

type DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum string

const (
	DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnumFailureActionUnspecified DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum = "FAILURE_ACTION_UNSPECIFIED"
	DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnumNoAction                 DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum = "NO_ACTION"
	DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnumDelete                   DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum = "DELETE"
)

type DataprocProjectsRegionsClustersCreateQueryParams struct {
	DollarXgafv                  *shared.XgafvEnum                                                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                  *string                                                                `queryParam:"style=form,explode=true,name=access_token"`
	ActionOnFailedPrimaryWorkers *DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum `queryParam:"style=form,explode=true,name=actionOnFailedPrimaryWorkers"`
	Alt                          *shared.AltEnum                                                        `queryParam:"style=form,explode=true,name=alt"`
	Callback                     *string                                                                `queryParam:"style=form,explode=true,name=callback"`
	Fields                       *string                                                                `queryParam:"style=form,explode=true,name=fields"`
	Key                          *string                                                                `queryParam:"style=form,explode=true,name=key"`
	OauthToken                   *string                                                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                  *bool                                                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                    *string                                                                `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID                    *string                                                                `queryParam:"style=form,explode=true,name=requestId"`
	UploadType                   *string                                                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol               *string                                                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataprocProjectsRegionsClustersCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataprocProjectsRegionsClustersCreateRequest struct {
	PathParams  DataprocProjectsRegionsClustersCreatePathParams
	QueryParams DataprocProjectsRegionsClustersCreateQueryParams
	Request     *shared.Cluster `request:"mediaType=application/json"`
	Security    DataprocProjectsRegionsClustersCreateSecurity
}

type DataprocProjectsRegionsClustersCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
