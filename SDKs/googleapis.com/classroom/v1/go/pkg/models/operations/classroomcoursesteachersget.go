package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesTeachersGetPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type ClassroomCoursesTeachersGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClassroomCoursesTeachersGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesTeachersGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesTeachersGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesTeachersGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesTeachersGetSecurity struct {
    Option1 *ClassroomCoursesTeachersGetSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesTeachersGetSecurityOption2 `security:"option"`
    Option3 *ClassroomCoursesTeachersGetSecurityOption3 `security:"option"`
    Option4 *ClassroomCoursesTeachersGetSecurityOption4 `security:"option"`
    
}

type ClassroomCoursesTeachersGetRequest struct {
    PathParams ClassroomCoursesTeachersGetPathParams 
    QueryParams ClassroomCoursesTeachersGetQueryParams 
    Security ClassroomCoursesTeachersGetSecurity 
    
}

type ClassroomCoursesTeachersGetResponse struct {
    ContentType string 
    StatusCode int64 
    Teacher *shared.Teacher 
    
}

