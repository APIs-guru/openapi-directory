package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesCourseWorkGetPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ClassroomCoursesCourseWorkGetQueryParams struct {
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

type ClassroomCoursesCourseWorkGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkGetSecurity struct {
    Option1 *ClassroomCoursesCourseWorkGetSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesCourseWorkGetSecurityOption2 `security:"option"`
    Option3 *ClassroomCoursesCourseWorkGetSecurityOption3 `security:"option"`
    Option4 *ClassroomCoursesCourseWorkGetSecurityOption4 `security:"option"`
    
}

type ClassroomCoursesCourseWorkGetRequest struct {
    PathParams ClassroomCoursesCourseWorkGetPathParams 
    QueryParams ClassroomCoursesCourseWorkGetQueryParams 
    Security ClassroomCoursesCourseWorkGetSecurity 
    
}

type ClassroomCoursesCourseWorkGetResponse struct {
    ContentType string 
    CourseWork *shared.CourseWork 
    StatusCode int64 
    
}

