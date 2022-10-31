package operations

import (
"openapi/pkg/models/shared")

type ClassroomUserProfilesGetPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type ClassroomUserProfilesGetQueryParams struct {
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

type ClassroomUserProfilesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGetSecurity struct {
    Option1 *ClassroomUserProfilesGetSecurityOption1 `security:"option"`
    Option2 *ClassroomUserProfilesGetSecurityOption2 `security:"option"`
    Option3 *ClassroomUserProfilesGetSecurityOption3 `security:"option"`
    Option4 *ClassroomUserProfilesGetSecurityOption4 `security:"option"`
    
}

type ClassroomUserProfilesGetRequest struct {
    PathParams ClassroomUserProfilesGetPathParams 
    QueryParams ClassroomUserProfilesGetQueryParams 
    Security ClassroomUserProfilesGetSecurity 
    
}

type ClassroomUserProfilesGetResponse struct {
    ContentType string 
    StatusCode int64 
    UserProfile *shared.UserProfile 
    
}

