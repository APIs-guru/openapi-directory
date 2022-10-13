package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesTeachersListPathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
}

type ClassroomCoursesTeachersListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClassroomCoursesTeachersListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesTeachersListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesTeachersListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesTeachersListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesTeachersListSecurity struct {
	Option1 *ClassroomCoursesTeachersListSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesTeachersListSecurityOption2 `security:"option"`
	Option3 *ClassroomCoursesTeachersListSecurityOption3 `security:"option"`
	Option4 *ClassroomCoursesTeachersListSecurityOption4 `security:"option"`
}

type ClassroomCoursesTeachersListRequest struct {
	PathParams  ClassroomCoursesTeachersListPathParams
	QueryParams ClassroomCoursesTeachersListQueryParams
	Security    ClassroomCoursesTeachersListSecurity
}

type ClassroomCoursesTeachersListResponse struct {
	ContentType          string
	ListTeachersResponse *shared.ListTeachersResponse
	StatusCode           int64
}
