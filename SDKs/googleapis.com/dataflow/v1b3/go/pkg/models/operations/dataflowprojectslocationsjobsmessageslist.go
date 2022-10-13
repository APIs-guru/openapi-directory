package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsJobsMessagesListPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum string

const (
	DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnumJobMessageImportanceUnknown DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
	DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnumJobMessageDebug             DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_DEBUG"
	DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnumJobMessageDetailed          DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_DETAILED"
	DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnumJobMessageBasic             DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_BASIC"
	DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnumJobMessageWarning           DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_WARNING"
	DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnumJobMessageError             DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum = "JOB_MESSAGE_ERROR"
)

type DataflowProjectsLocationsJobsMessagesListQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                                         `queryParam:"style=form,explode=true,name=callback"`
	EndTime           *string                                                         `queryParam:"style=form,explode=true,name=endTime"`
	Fields            *string                                                         `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                                                         `queryParam:"style=form,explode=true,name=key"`
	MinimumImportance *DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum `queryParam:"style=form,explode=true,name=minimumImportance"`
	OauthToken        *string                                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize          *int64                                                          `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken         *string                                                         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint       *bool                                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	StartTime         *string                                                         `queryParam:"style=form,explode=true,name=startTime"`
	UploadType        *string                                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataflowProjectsLocationsJobsMessagesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsMessagesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsMessagesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsMessagesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsMessagesListSecurity struct {
	Option1 *DataflowProjectsLocationsJobsMessagesListSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsJobsMessagesListSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsJobsMessagesListSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsJobsMessagesListSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsJobsMessagesListRequest struct {
	PathParams  DataflowProjectsLocationsJobsMessagesListPathParams
	QueryParams DataflowProjectsLocationsJobsMessagesListQueryParams
	Security    DataflowProjectsLocationsJobsMessagesListSecurity
}

type DataflowProjectsLocationsJobsMessagesListResponse struct {
	ContentType             string
	ListJobMessagesResponse *shared.ListJobMessagesResponse
	StatusCode              int64
}
