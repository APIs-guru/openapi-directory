package operations

import (
"openapi/pkg/models/shared")

type ClassroomUserProfilesGuardianInvitationsListPathParams struct {
    StudentID string `pathParam:"style=simple,explode=false,name=studentId"`
    
}


type ClassroomUserProfilesGuardianInvitationsListStatesEnum string

const (
    ClassroomUserProfilesGuardianInvitationsListStatesEnumGuardianInvitationStateUnspecified ClassroomUserProfilesGuardianInvitationsListStatesEnum = "GUARDIAN_INVITATION_STATE_UNSPECIFIED"
ClassroomUserProfilesGuardianInvitationsListStatesEnumPending ClassroomUserProfilesGuardianInvitationsListStatesEnum = "PENDING"
ClassroomUserProfilesGuardianInvitationsListStatesEnumComplete ClassroomUserProfilesGuardianInvitationsListStatesEnum = "COMPLETE"
)


type ClassroomUserProfilesGuardianInvitationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    InvitedEmailAddress *string `queryParam:"style=form,explode=true,name=invitedEmailAddress"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    States []ClassroomUserProfilesGuardianInvitationsListStatesEnum `queryParam:"style=form,explode=true,name=states"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ClassroomUserProfilesGuardianInvitationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGuardianInvitationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomUserProfilesGuardianInvitationsListSecurity struct {
    Option1 *ClassroomUserProfilesGuardianInvitationsListSecurityOption1 `security:"option"`
    Option2 *ClassroomUserProfilesGuardianInvitationsListSecurityOption2 `security:"option"`
    
}

type ClassroomUserProfilesGuardianInvitationsListRequest struct {
    PathParams ClassroomUserProfilesGuardianInvitationsListPathParams 
    QueryParams ClassroomUserProfilesGuardianInvitationsListQueryParams 
    Security ClassroomUserProfilesGuardianInvitationsListSecurity 
    
}

type ClassroomUserProfilesGuardianInvitationsListResponse struct {
    ContentType string 
    ListGuardianInvitationsResponse *shared.ListGuardianInvitationsResponse 
    StatusCode int64 
    
}

