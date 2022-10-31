package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams struct {
	CourseID     string `pathParam:"style=simple,explode=false,name=courseId"`
	CourseWorkID string `pathParam:"style=simple,explode=false,name=courseWorkId"`
	ID           string `pathParam:"style=simple,explode=false,name=id"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams struct {
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

type ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity struct {
	Option1 *ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurityOption2 `security:"option"`
}

type ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsRequest struct {
	PathParams  ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsPathParams
	QueryParams ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsQueryParams
	Request     *shared.ModifyAttachmentsRequest `request:"mediaType=application/json"`
	Security    ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsSecurity
}

type ClassroomCoursesCourseWorkStudentSubmissionsModifyAttachmentsResponse struct {
	ContentType       string
	StatusCode        int64
	StudentSubmission *shared.StudentSubmission
}
