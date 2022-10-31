package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesTopicsGetPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ClassroomCoursesTopicsGetQueryParams struct {
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

type ClassroomCoursesTopicsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesTopicsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesTopicsGetSecurity struct {
    Option1 *ClassroomCoursesTopicsGetSecurityOption1 `security:"option"`
    Option2 *ClassroomCoursesTopicsGetSecurityOption2 `security:"option"`
    
}

type ClassroomCoursesTopicsGetRequest struct {
    PathParams ClassroomCoursesTopicsGetPathParams 
    QueryParams ClassroomCoursesTopicsGetQueryParams 
    Security ClassroomCoursesTopicsGetSecurity 
    
}

type ClassroomCoursesTopicsGetResponse struct {
    ContentType string 
    StatusCode int64 
    Topic *shared.Topic 
    
}

