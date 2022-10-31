package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkListPathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
}

type ClassroomCoursesCourseWorkListCourseWorkStatesEnum string

const (
	ClassroomCoursesCourseWorkListCourseWorkStatesEnumCourseWorkStateUnspecified ClassroomCoursesCourseWorkListCourseWorkStatesEnum = "COURSE_WORK_STATE_UNSPECIFIED"
	ClassroomCoursesCourseWorkListCourseWorkStatesEnumPublished                  ClassroomCoursesCourseWorkListCourseWorkStatesEnum = "PUBLISHED"
	ClassroomCoursesCourseWorkListCourseWorkStatesEnumDraft                      ClassroomCoursesCourseWorkListCourseWorkStatesEnum = "DRAFT"
	ClassroomCoursesCourseWorkListCourseWorkStatesEnumDeleted                    ClassroomCoursesCourseWorkListCourseWorkStatesEnum = "DELETED"
)

type ClassroomCoursesCourseWorkListQueryParams struct {
	DollarXgafv      *shared.XgafvEnum                                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken      *string                                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt              *shared.AltEnum                                      `queryParam:"style=form,explode=true,name=alt"`
	Callback         *string                                              `queryParam:"style=form,explode=true,name=callback"`
	CourseWorkStates []ClassroomCoursesCourseWorkListCourseWorkStatesEnum `queryParam:"style=form,explode=true,name=courseWorkStates"`
	Fields           *string                                              `queryParam:"style=form,explode=true,name=fields"`
	Key              *string                                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string                                              `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy          *string                                              `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize         *int64                                               `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken        *string                                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint      *bool                                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string                                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType       *string                                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol   *string                                              `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClassroomCoursesCourseWorkListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkListSecurity struct {
	Option1 *ClassroomCoursesCourseWorkListSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesCourseWorkListSecurityOption2 `security:"option"`
	Option3 *ClassroomCoursesCourseWorkListSecurityOption3 `security:"option"`
	Option4 *ClassroomCoursesCourseWorkListSecurityOption4 `security:"option"`
}

type ClassroomCoursesCourseWorkListRequest struct {
	PathParams  ClassroomCoursesCourseWorkListPathParams
	QueryParams ClassroomCoursesCourseWorkListQueryParams
	Security    ClassroomCoursesCourseWorkListSecurity
}

type ClassroomCoursesCourseWorkListResponse struct {
	ContentType            string
	ListCourseWorkResponse *shared.ListCourseWorkResponse
	StatusCode             int64
}
