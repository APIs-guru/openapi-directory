package operations

import (
"openapi/pkg/models/shared")


type ClassroomCoursesListCourseStatesEnum string

const (
    ClassroomCoursesListCourseStatesEnumCourseStateUnspecified ClassroomCoursesListCourseStatesEnum = "COURSE_STATE_UNSPECIFIED"
ClassroomCoursesListCourseStatesEnumActive ClassroomCoursesListCourseStatesEnum = "ACTIVE"
ClassroomCoursesListCourseStatesEnumArchived ClassroomCoursesListCourseStatesEnum = "ARCHIVED"
ClassroomCoursesListCourseStatesEnumProvisioned ClassroomCoursesListCourseStatesEnum = "PROVISIONED"
ClassroomCoursesListCourseStatesEnumDeclined ClassroomCoursesListCourseStatesEnum = "DECLINED"
ClassroomCoursesListCourseStatesEnumSuspended ClassroomCoursesListCourseStatesEnum = "SUSPENDED"
)


type ClassroomCoursesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CourseStates []ClassroomCoursesListCourseStatesEnum `queryParam:"style=form,explode=true,name=courseStates"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StudentID *string `queryParam:"style=form,explode=true,name=studentId"`
    TeacherID *string `queryParam:"style=form,explode=true,name=teacherId"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClassroomCoursesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesListSecurity struct {
    Option1 *ClassroomCoursesListSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesListSecurityOption2 `security:"option"`
    
}

type ClassroomCoursesListRequest struct {
    QueryParams ClassroomCoursesListQueryParams 
    Security ClassroomCoursesListSecurity 
    
}

type ClassroomCoursesListResponse struct {
    ContentType string 
    ListCoursesResponse *shared.ListCoursesResponse 
    StatusCode int64 
    
}

