package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesCourseWorkStudentSubmissionsListPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    CourseWorkID string `pathParam:"style=simple,explode=false,name=courseWorkId"`
    
}


type ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum string

const (
    ClassroomCoursesCourseWorkStudentSubmissionsListLateEnumLateValuesUnspecified ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum = "LATE_VALUES_UNSPECIFIED"
ClassroomCoursesCourseWorkStudentSubmissionsListLateEnumLateOnly ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum = "LATE_ONLY"
ClassroomCoursesCourseWorkStudentSubmissionsListLateEnumNotLateOnly ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum = "NOT_LATE_ONLY"
)



type ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum string

const (
    ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumSubmissionStateUnspecified ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum = "SUBMISSION_STATE_UNSPECIFIED"
ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumNew ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum = "NEW"
ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumCreated ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum = "CREATED"
ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumTurnedIn ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum = "TURNED_IN"
ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumReturned ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum = "RETURNED"
ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnumReclaimedByStudent ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum = "RECLAIMED_BY_STUDENT"
)


type ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Late *ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum `queryParam:"style=form,explode=true,name=late"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    States []ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum `queryParam:"style=form,explode=true,name=states"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListSecurity struct {
    Option1 *ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2 `security:"option"`
    Option3 *ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3 `security:"option"`
    Option4 *ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4 `security:"option"`
    Option5 *ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5 `security:"option"`
    Option6 *ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6 `security:"option"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListRequest struct {
    PathParams ClassroomCoursesCourseWorkStudentSubmissionsListPathParams 
    QueryParams ClassroomCoursesCourseWorkStudentSubmissionsListQueryParams 
    Security ClassroomCoursesCourseWorkStudentSubmissionsListSecurity 
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsListResponse struct {
    ContentType string 
    ListStudentSubmissionsResponse *shared.ListStudentSubmissionsResponse 
    StatusCode int64 
    
}

