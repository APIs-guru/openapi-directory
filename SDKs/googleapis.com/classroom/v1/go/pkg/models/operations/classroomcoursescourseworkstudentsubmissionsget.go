package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams struct {
	CourseID     string `pathParam:"style=simple,explode=false,name=courseId"`
	CourseWorkID string `pathParam:"style=simple,explode=false,name=courseWorkId"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams struct {
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

type ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity struct {
	Option1 *ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption2 `security:"option"`
	Option3 *ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption3 `security:"option"`
	Option4 *ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption4 `security:"option"`
	Option5 *ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption5 `security:"option"`
	Option6 *ClassroomCoursesCourseWorkStudentSubmissionsGetSecurityOption6 `security:"option"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetRequest struct {
	PathParams  ClassroomCoursesCourseWorkStudentSubmissionsGetPathParams
	QueryParams ClassroomCoursesCourseWorkStudentSubmissionsGetQueryParams
	Security    ClassroomCoursesCourseWorkStudentSubmissionsGetSecurity
}

type ClassroomCoursesCourseWorkStudentSubmissionsGetResponse struct {
	ContentType       string
	StatusCode        int64
	StudentSubmission *shared.StudentSubmission
}
