package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams struct {
	CourseID     string `pathParam:"style=simple,explode=false,name=courseId"`
	CourseWorkID string `pathParam:"style=simple,explode=false,name=courseWorkId"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams struct {
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

type ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsReturnRequest struct {
	PathParams  ClassroomCoursesCourseWorkStudentSubmissionsReturnPathParams
	QueryParams ClassroomCoursesCourseWorkStudentSubmissionsReturnQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    ClassroomCoursesCourseWorkStudentSubmissionsReturnSecurity
}

type ClassroomCoursesCourseWorkStudentSubmissionsReturnResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
