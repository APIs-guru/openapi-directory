package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesTopicsCreatePathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    
}

type ClassroomCoursesTopicsCreateQueryParams struct {
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

type ClassroomCoursesTopicsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesTopicsCreateRequest struct {
    PathParams ClassroomCoursesTopicsCreatePathParams 
    QueryParams ClassroomCoursesTopicsCreateQueryParams 
    Request *shared.Topic `request:"mediaType=application/json"`
    Security ClassroomCoursesTopicsCreateSecurity 
    
}

type ClassroomCoursesTopicsCreateResponse struct {
    ContentType string 
    StatusCode int64 
    Topic *shared.Topic 
    
}

