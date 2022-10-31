package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams struct {
	CourseID     string `pathParam:"style=simple,explode=false,name=courseId"`
	CourseWorkID string `pathParam:"style=simple,explode=false,name=courseWorkId"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity struct {
	Option1 *ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2 `security:"option"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest struct {
	PathParams  ClassroomCoursesCourseWorkStudentSubmissionsPatchPathParams
	QueryParams ClassroomCoursesCourseWorkStudentSubmissionsPatchQueryParams
	Request     *shared.StudentSubmission `request:"mediaType=application/json"`
	Security    ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity
}

type ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse struct {
	ContentType       string
	StatusCode        int64
	StudentSubmission *shared.StudentSubmission
}
