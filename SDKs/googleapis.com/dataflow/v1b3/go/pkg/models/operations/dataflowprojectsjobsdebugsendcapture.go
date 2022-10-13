package operations

import (
	"openapi/pkg/models/shared"
)

type DataflowProjectsJobsDebugSendCapturePathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DataflowProjectsJobsDebugSendCaptureQueryParams struct {
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

type DataflowProjectsJobsDebugSendCaptureSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsDebugSendCaptureSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsDebugSendCaptureSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsDebugSendCaptureSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataflowProjectsJobsDebugSendCaptureSecurity struct {
	Option1 *DataflowProjectsJobsDebugSendCaptureSecurityOption1 `security:"option"`
	Option2 *DataflowProjectsJobsDebugSendCaptureSecurityOption2 `security:"option"`
	Option3 *DataflowProjectsJobsDebugSendCaptureSecurityOption3 `security:"option"`
	Option4 *DataflowProjectsJobsDebugSendCaptureSecurityOption4 `security:"option"`
}

type DataflowProjectsJobsDebugSendCaptureRequest struct {
	PathParams  DataflowProjectsJobsDebugSendCapturePathParams
	QueryParams DataflowProjectsJobsDebugSendCaptureQueryParams
	Request     *shared.SendDebugCaptureRequest `request:"mediaType=application/json"`
	Security    DataflowProjectsJobsDebugSendCaptureSecurity
}

type DataflowProjectsJobsDebugSendCaptureResponse struct {
	ContentType              string
	SendDebugCaptureResponse map[string]interface{}
	StatusCode               int64
}
