package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsJobsListPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsJobsListFilterEnum string

const (
	DataflowProjectsJobsListFilterEnumUnknown    DataflowProjectsJobsListFilterEnum = "UNKNOWN"
	DataflowProjectsJobsListFilterEnumAll        DataflowProjectsJobsListFilterEnum = "ALL"
	DataflowProjectsJobsListFilterEnumTerminated DataflowProjectsJobsListFilterEnum = "TERMINATED"
	DataflowProjectsJobsListFilterEnumActive     DataflowProjectsJobsListFilterEnum = "ACTIVE"
)

type DataflowProjectsJobsListViewEnum string

const (
	DataflowProjectsJobsListViewEnumJobViewUnknown     DataflowProjectsJobsListViewEnum = "JOB_VIEW_UNKNOWN"
	DataflowProjectsJobsListViewEnumJobViewSummary     DataflowProjectsJobsListViewEnum = "JOB_VIEW_SUMMARY"
	DataflowProjectsJobsListViewEnumJobViewAll         DataflowProjectsJobsListViewEnum = "JOB_VIEW_ALL"
	DataflowProjectsJobsListViewEnumJobViewDescription DataflowProjectsJobsListViewEnum = "JOB_VIEW_DESCRIPTION"
)

type DataflowProjectsJobsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                             `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                             `queryParam:"style=form,explode=true,name=fields"`
	Filter         *DataflowProjectsJobsListFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                             `queryParam:"style=form,explode=true,name=key"`
	Location       *string                             `queryParam:"style=form,explode=true,name=location"`
	Name           *string                             `queryParam:"style=form,explode=true,name=name"`
	OauthToken     *string                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                              `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                             `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                             `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *DataflowProjectsJobsListViewEnum   `queryParam:"style=form,explode=true,name=view"`
}

type DataflowProjectsJobsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsListSecurity struct {
	Option1 *DataflowProjectsJobsListSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsJobsListSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsJobsListSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsJobsListSecurityOption4 `security:"option"`
}

type DataflowProjectsJobsListRequest struct {
	PathParams  DataflowProjectsJobsListPathParams
	QueryParams DataflowProjectsJobsListQueryParams
	Security    DataflowProjectsJobsListSecurity
}

type DataflowProjectsJobsListResponse struct {
	ContentType      string
	ListJobsResponse *shared.ListJobsResponse
	StatusCode       int64
}
