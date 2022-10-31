package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesStudentsListPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    
}

type ClassroomCoursesStudentsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClassroomCoursesStudentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsListSecurity struct {
    Option1 *ClassroomCoursesStudentsListSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesStudentsListSecurityOption2 `security:"option"`
    Option3 *ClassroomCoursesStudentsListSecurityOption3 `security:"option"`
    Option4 *ClassroomCoursesStudentsListSecurityOption4 `security:"option"`
    
}

type ClassroomCoursesStudentsListRequest struct {
    PathParams ClassroomCoursesStudentsListPathParams 
    QueryParams ClassroomCoursesStudentsListQueryParams 
    Security ClassroomCoursesStudentsListSecurity 
    
}

type ClassroomCoursesStudentsListResponse struct {
    ContentType string 
    ListStudentsResponse *shared.ListStudentsResponse 
    StatusCode int64 
    
}

