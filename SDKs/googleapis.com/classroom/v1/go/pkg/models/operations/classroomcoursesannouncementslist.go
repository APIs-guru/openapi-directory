package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesAnnouncementsListPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    
}


type ClassroomCoursesAnnouncementsListAnnouncementStatesEnum string

const (
    ClassroomCoursesAnnouncementsListAnnouncementStatesEnumAnnouncementStateUnspecified ClassroomCoursesAnnouncementsListAnnouncementStatesEnum = "ANNOUNCEMENT_STATE_UNSPECIFIED"
ClassroomCoursesAnnouncementsListAnnouncementStatesEnumPublished ClassroomCoursesAnnouncementsListAnnouncementStatesEnum = "PUBLISHED"
ClassroomCoursesAnnouncementsListAnnouncementStatesEnumDraft ClassroomCoursesAnnouncementsListAnnouncementStatesEnum = "DRAFT"
ClassroomCoursesAnnouncementsListAnnouncementStatesEnumDeleted ClassroomCoursesAnnouncementsListAnnouncementStatesEnum = "DELETED"
)


type ClassroomCoursesAnnouncementsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AnnouncementStates []ClassroomCoursesAnnouncementsListAnnouncementStatesEnum `queryParam:"style=form,explode=true,name=announcementStates"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClassroomCoursesAnnouncementsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesAnnouncementsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesAnnouncementsListSecurity struct {
    Option1 *ClassroomCoursesAnnouncementsListSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesAnnouncementsListSecurityOption2 `security:"option"`
    
}

type ClassroomCoursesAnnouncementsListRequest struct {
    PathParams ClassroomCoursesAnnouncementsListPathParams 
    QueryParams ClassroomCoursesAnnouncementsListQueryParams 
    Security ClassroomCoursesAnnouncementsListSecurity 
    
}

type ClassroomCoursesAnnouncementsListResponse struct {
    ContentType string 
    ListAnnouncementsResponse *shared.ListAnnouncementsResponse 
    StatusCode int64 
    
}

