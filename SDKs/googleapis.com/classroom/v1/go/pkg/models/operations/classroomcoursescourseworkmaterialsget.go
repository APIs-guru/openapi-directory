package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesCourseWorkMaterialsGetPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ClassroomCoursesCourseWorkMaterialsGetQueryParams struct {
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

type ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkMaterialsGetSecurity struct {
    Option1 *ClassroomCoursesCourseWorkMaterialsGetSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesCourseWorkMaterialsGetSecurityOption2 `security:"option"`
    
}

type ClassroomCoursesCourseWorkMaterialsGetRequest struct {
    PathParams ClassroomCoursesCourseWorkMaterialsGetPathParams 
    QueryParams ClassroomCoursesCourseWorkMaterialsGetQueryParams 
    Security ClassroomCoursesCourseWorkMaterialsGetSecurity 
    
}

type ClassroomCoursesCourseWorkMaterialsGetResponse struct {
    ContentType string 
    CourseWorkMaterial *shared.CourseWorkMaterial 
    StatusCode int64 
    
}

