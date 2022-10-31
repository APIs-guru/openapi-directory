package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkPatchPathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
	ID       string `pathParam:"style=simple,explode=false,name=id"`
}

type ClassroomCoursesCourseWorkPatchQueryParams struct {
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

type ClassroomCoursesCourseWorkPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkPatchRequest struct {
	PathParams  ClassroomCoursesCourseWorkPatchPathParams
	QueryParams ClassroomCoursesCourseWorkPatchQueryParams
	Request     *shared.CourseWork `request:"mediaType=application/json"`
	Security    ClassroomCoursesCourseWorkPatchSecurity
}

type ClassroomCoursesCourseWorkPatchResponse struct {
	ContentType string
	CourseWork  *shared.CourseWork
	StatusCode  int64
}
