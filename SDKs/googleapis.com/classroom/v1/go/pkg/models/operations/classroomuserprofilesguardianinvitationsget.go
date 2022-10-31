package operations

import (
"openapi/pkg/models/shared")

type ClassroomUserProfilesGuardianInvitationsGetPathParams struct {
    InvitationID string `pathParam:"style=simple,explode=false,name=invitationId"`
    StudentID string `pathParam:"style=simple,explode=false,name=studentId"`
    
}

type ClassroomUserProfilesGuardianInvitationsGetQueryParams struct {
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

type ClassroomUserProfilesGuardianInvitationsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGuardianInvitationsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGuardianInvitationsGetSecurity struct {
    Option1 *ClassroomUserProfilesGuardianInvitationsGetSecurityOption1 `security:"option"`
    Option2 *ClassroomUserProfilesGuardianInvitationsGetSecurityOption2 `security:"option"`
    
}

type ClassroomUserProfilesGuardianInvitationsGetRequest struct {
    PathParams ClassroomUserProfilesGuardianInvitationsGetPathParams 
    QueryParams ClassroomUserProfilesGuardianInvitationsGetQueryParams 
    Security ClassroomUserProfilesGuardianInvitationsGetSecurity 
    
}

type ClassroomUserProfilesGuardianInvitationsGetResponse struct {
    ContentType string 
    GuardianInvitation *shared.GuardianInvitation 
    StatusCode int64 
    
}

