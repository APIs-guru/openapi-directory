package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsJobsAggregatedPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsJobsAggregatedFilterEnum string

const (
	DataflowProjectsJobsAggregatedFilterEnumUnknown    DataflowProjectsJobsAggregatedFilterEnum = "UNKNOWN"
	DataflowProjectsJobsAggregatedFilterEnumAll        DataflowProjectsJobsAggregatedFilterEnum = "ALL"
	DataflowProjectsJobsAggregatedFilterEnumTerminated DataflowProjectsJobsAggregatedFilterEnum = "TERMINATED"
	DataflowProjectsJobsAggregatedFilterEnumActive     DataflowProjectsJobsAggregatedFilterEnum = "ACTIVE"
)

type DataflowProjectsJobsAggregatedViewEnum string

const (
	DataflowProjectsJobsAggregatedViewEnumJobViewUnknown     DataflowProjectsJobsAggregatedViewEnum = "JOB_VIEW_UNKNOWN"
	DataflowProjectsJobsAggregatedViewEnumJobViewSummary     DataflowProjectsJobsAggregatedViewEnum = "JOB_VIEW_SUMMARY"
	DataflowProjectsJobsAggregatedViewEnumJobViewAll         DataflowProjectsJobsAggregatedViewEnum = "JOB_VIEW_ALL"
	DataflowProjectsJobsAggregatedViewEnumJobViewDescription DataflowProjectsJobsAggregatedViewEnum = "JOB_VIEW_DESCRIPTION"
)

type DataflowProjectsJobsAggregatedQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                           `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                   `queryParam:"style=form,explode=true,name=fields"`
	Filter         *DataflowProjectsJobsAggregatedFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                   `queryParam:"style=form,explode=true,name=key"`
	Location       *string                                   `queryParam:"style=form,explode=true,name=location"`
	Name           *string                                   `queryParam:"style=form,explode=true,name=name"`
	OauthToken     *string                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                    `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                   `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *DataflowProjectsJobsAggregatedViewEnum   `queryParam:"style=form,explode=true,name=view"`
}

type DataflowProjectsJobsAggregatedSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsAggregatedSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsAggregatedSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsAggregatedSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsAggregatedSecurity struct {
	Option1 *DataflowProjectsJobsAggregatedSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsJobsAggregatedSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsJobsAggregatedSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsJobsAggregatedSecurityOption4 `security:"option"`
}

type DataflowProjectsJobsAggregatedRequest struct {
	PathParams  DataflowProjectsJobsAggregatedPathParams
	QueryParams DataflowProjectsJobsAggregatedQueryParams
	Security    DataflowProjectsJobsAggregatedSecurity
}

type DataflowProjectsJobsAggregatedResponse struct {
	ContentType      string
	ListJobsResponse *shared.ListJobsResponse
	StatusCode       int64
}
