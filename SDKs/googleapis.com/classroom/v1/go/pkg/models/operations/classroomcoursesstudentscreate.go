package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesStudentsCreatePathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
}

type ClassroomCoursesStudentsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	EnrollmentCode *string           `queryParam:"style=form,explode=true,name=enrollmentCode"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClassroomCoursesStudentsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesStudentsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesStudentsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesStudentsCreateSecurity struct {
	Option1 *ClassroomCoursesStudentsCreateSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesStudentsCreateSecurityOption2 `security:"option"`
	Option3 *ClassroomCoursesStudentsCreateSecurityOption3 `security:"option"`
}

type ClassroomCoursesStudentsCreateRequest struct {
	PathParams  ClassroomCoursesStudentsCreatePathParams
	QueryParams ClassroomCoursesStudentsCreateQueryParams
	Request     *shared.Student `request:"mediaType=application/json"`
	Security    ClassroomCoursesStudentsCreateSecurity
}

type ClassroomCoursesStudentsCreateResponse struct {
	ContentType string
	StatusCode  int64
	Student     *shared.Student
}
