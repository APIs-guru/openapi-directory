package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesAnnouncementsPatchPathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
	ID       string `pathParam:"style=simple,explode=false,name=id"`
}

type ClassroomCoursesAnnouncementsPatchQueryParams struct {
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

type ClassroomCoursesAnnouncementsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesAnnouncementsPatchRequest struct {
	PathParams  ClassroomCoursesAnnouncementsPatchPathParams
	QueryParams ClassroomCoursesAnnouncementsPatchQueryParams
	Request     *shared.Announcement `request:"mediaType=application/json"`
	Security    ClassroomCoursesAnnouncementsPatchSecurity
}

type ClassroomCoursesAnnouncementsPatchResponse struct {
	Announcement *shared.Announcement
	ContentType  string
	StatusCode   int64
}
