package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsLocationsJobsDebugSendCapturePathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	Location  string `pathParam:"style=simple,explode=false,name=location"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsLocationsJobsDebugSendCaptureQueryParams struct {
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

type DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsLocationsJobsDebugSendCaptureSecurity struct {
	Option1 *DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4 `security:"option"`
}

type DataflowProjectsLocationsJobsDebugSendCaptureRequest struct {
	PathParams  DataflowProjectsLocationsJobsDebugSendCapturePathParams
	QueryParams DataflowProjectsLocationsJobsDebugSendCaptureQueryParams
	Request     *shared.SendDebugCaptureRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsLocationsJobsDebugSendCaptureSecurity
}

type DataflowProjectsLocationsJobsDebugSendCaptureResponse struct {
	ContentType              string
	SendDebugCaptureResponse map[string]interface{}
	StatusCode               int64
}
