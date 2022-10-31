package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkCreatePathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
}

type ClassroomCoursesCourseWorkCreateQueryParams struct {
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

type ClassroomCoursesCourseWorkCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkCreateRequest struct {
	PathParams  ClassroomCoursesCourseWorkCreatePathParams
	QueryParams ClassroomCoursesCourseWorkCreateQueryParams
	Request     *shared.CourseWork `request:"mediaType=application/json"`
	Security    ClassroomCoursesCourseWorkCreateSecurity
}

type ClassroomCoursesCourseWorkCreateResponse struct {
	ContentType string
	CourseWork  *shared.CourseWork
	StatusCode  int64
}
