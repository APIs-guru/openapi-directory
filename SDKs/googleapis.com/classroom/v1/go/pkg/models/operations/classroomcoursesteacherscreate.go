package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesTeachersCreatePathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
}

type ClassroomCoursesTeachersCreateQueryParams struct {
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

type ClassroomCoursesTeachersCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesTeachersCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesTeachersCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesTeachersCreateSecurity struct {
	Option1 *ClassroomCoursesTeachersCreateSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesTeachersCreateSecurityOption2 `security:"option"`
	Option3 *ClassroomCoursesTeachersCreateSecurityOption3 `security:"option"`
}

type ClassroomCoursesTeachersCreateRequest struct {
	PathParams  ClassroomCoursesTeachersCreatePathParams
	QueryParams ClassroomCoursesTeachersCreateQueryParams
	Request     *shared.Teacher `request:"mediaType=application/json"`
	Security    ClassroomCoursesTeachersCreateSecurity
}

type ClassroomCoursesTeachersCreateResponse struct {
	ContentType string
	StatusCode  int64
	Teacher     *shared.Teacher
}
