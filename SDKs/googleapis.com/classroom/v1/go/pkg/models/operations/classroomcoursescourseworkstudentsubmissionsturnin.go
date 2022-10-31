package operations

import (
"openapi/pkg/models/shared")

type ClassroomCoursesCourseWorkStudentSubmissionsTurnInPathParams struct {
    CourseID string `pathParam:"style=simple,explode=false,name=courseId"`
    CourseWorkID string `pathParam:"style=simple,explode=false,name=courseWorkId"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsTurnInQueryParams struct {
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

type ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsTurnInRequest struct {
    PathParams ClassroomCoursesCourseWorkStudentSubmissionsTurnInPathParams 
    QueryParams ClassroomCoursesCourseWorkStudentSubmissionsTurnInQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security ClassroomCoursesCourseWorkStudentSubmissionsTurnInSecurity 
    
}

type ClassroomCoursesCourseWorkStudentSubmissionsTurnInResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    StatusCode int64 
    
}

