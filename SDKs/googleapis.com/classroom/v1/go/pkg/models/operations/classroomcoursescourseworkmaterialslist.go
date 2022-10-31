package operations

import (
	"openapi/pkg/models/shared"
)

type ClassroomCoursesCourseWorkMaterialsListPathParams struct {
	CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
}

type ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum string

const (
	ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumCourseworkMaterialStateUnspecified ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED"
	ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumPublished                          ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum = "PUBLISHED"
	ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumDraft                              ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum = "DRAFT"
	ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnumDeleted                            ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum = "DELETED"
)

type ClassroomCoursesCourseWorkMaterialsListQueryParams struct {
	DollarXgafv              *shared.XgafvEnum                                                     `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken              *string                                                               `queryParam:"style=form,explode=true,name=access_token"`
	Alt                      *shared.AltEnum                                                       `queryParam:"style=form,explode=true,name=alt"`
	Callback                 *string                                                               `queryParam:"style=form,explode=true,name=callback"`
	CourseWorkMaterialStates []ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum `queryParam:"style=form,explode=true,name=courseWorkMaterialStates"`
	Fields                   *string                                                               `queryParam:"style=form,explode=true,name=fields"`
	Key                      *string                                                               `queryParam:"style=form,explode=true,name=key"`
	MaterialDriveID          *string                                                               `queryParam:"style=form,explode=true,name=materialDriveId"`
	MaterialLink             *string                                                               `queryParam:"style=form,explode=true,name=materialLink"`
	OauthToken               *string                                                               `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy                  *string                                                               `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize                 *int64                                                                `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                *string                                                               `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint              *bool                                                                 `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                *string                                                               `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType               *string                                                               `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol           *string                                                               `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ClassroomCoursesCourseWorkMaterialsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkMaterialsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ClassroomCoursesCourseWorkMaterialsListSecurity struct {
	Option1 *ClassroomCoursesCourseWorkMaterialsListSecurityOption1 `security:"option"`
	Option2 *ClassroomCoursesCourseWorkMaterialsListSecurityOption2 `security:"option"`
}

type ClassroomCoursesCourseWorkMaterialsListRequest struct {
	PathParams  ClassroomCoursesCourseWorkMaterialsListPathParams
	QueryParams ClassroomCoursesCourseWorkMaterialsListQueryParams
	Security    ClassroomCoursesCourseWorkMaterialsListSecurity
}

type ClassroomCoursesCourseWorkMaterialsListResponse struct {
	ContentType                    string
	ListCourseWorkMaterialResponse *shared.ListCourseWorkMaterialResponse
	StatusCode                     int64
}
