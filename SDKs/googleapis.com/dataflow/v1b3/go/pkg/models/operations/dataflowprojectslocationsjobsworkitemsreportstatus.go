package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams struct {
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

type DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity struct {
	Option1 *DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsJobsWorkItemsReportStatusRequest struct {
	PathParams  DataflowProjectsLocationsJobsWorkItemsReportStatusPathParams
	QueryParams DataflowProjectsLocationsJobsWorkItemsReportStatusQueryParams
	Request     *shared.ReportWorkItemStatusRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity
}

type DataflowProjectsLocationsJobsWorkItemsReportStatusResponse struct {
	ContentType                  string
	ReportWorkItemStatusResponse *shared.ReportWorkItemStatusResponse
	StatusCode                   int64
}
