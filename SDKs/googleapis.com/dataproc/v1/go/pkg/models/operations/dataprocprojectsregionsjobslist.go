package operations

import (
	"openapi/pkg/models/shared"
)

type DataprocProjectsRegionsJobsListPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	Region    string `pathParam:"style=simple,explode=false,name=region"`
}

type DataprocProjectsRegionsJobsListJobStateMatcherEnum string

const (
	DataprocProjectsRegionsJobsListJobStateMatcherEnumAll       DataprocProjectsRegionsJobsListJobStateMatcherEnum = "ALL"
	DataprocProjectsRegionsJobsListJobStateMatcherEnumActive    DataprocProjectsRegionsJobsListJobStateMatcherEnum = "ACTIVE"
	DataprocProjectsRegionsJobsListJobStateMatcherEnumNonActive DataprocProjectsRegionsJobsListJobStateMatcherEnum = "NON_ACTIVE"
)

type DataprocProjectsRegionsJobsListQueryParams struct {
	DollarXgafv     *shared.XgafvEnum                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                                             `queryParam:"style=form,explode=true,name=callback"`
	ClusterName     *string                                             `queryParam:"style=form,explode=true,name=clusterName"`
	Fields          *string                                             `queryParam:"style=form,explode=true,name=fields"`
	Filter          *string                                             `queryParam:"style=form,explode=true,name=filter"`
	JobStateMatcher *DataprocProjectsRegionsJobsListJobStateMatcherEnum `queryParam:"style=form,explode=true,name=jobStateMatcher"`
	Key             *string                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken      *string                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize        *int64                                              `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken       *string                                             `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint     *bool                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType      *string                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataprocProjectsRegionsJobsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataprocProjectsRegionsJobsListRequest struct {
	PathParams  DataprocProjectsRegionsJobsListPathParams
	QueryParams DataprocProjectsRegionsJobsListQueryParams
	Security    DataprocProjectsRegionsJobsListSecurity
}

type DataprocProjectsRegionsJobsListResponse struct {
	ContentType      string
	ListJobsResponse *shared.ListJobsResponse
	StatusCode       int64
}
