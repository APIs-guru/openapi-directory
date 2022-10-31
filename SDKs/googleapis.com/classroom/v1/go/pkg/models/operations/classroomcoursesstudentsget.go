package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesStudentsGetPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type ClassroomCoursesStudentsGetQueryParams struct {
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

type ClassroomCoursesStudentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesStudentsGetSecurity struct {
    Option1 *ClassroomCoursesStudentsGetSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesStudentsGetSecurityOption2 `security:"option"`
    Option3 *ClassroomCoursesStudentsGetSecurityOption3 `security:"option"`
    Option4 *ClassroomCoursesStudentsGetSecurityOption4 `security:"option"`
    
}

type ClassroomCoursesStudentsGetRequest struct {
    PathParams ClassroomCoursesStudentsGetPathParams 
    QueryParams ClassroomCoursesStudentsGetQueryParams 
    Security ClassroomCoursesStudentsGetSecurity 
    
}

type ClassroomCoursesStudentsGetResponse struct {
    ContentType string 
    StatusCode int64 
    Student *shared.Student 
    
}

