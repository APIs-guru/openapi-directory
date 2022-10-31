package operations

import (
"openapi/pkg/models/shared")

type ClassroomInvitationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CourseID *string `queryParam:"style=form,explode=true,name=courseId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type ClassroomInvitationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomInvitationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ClassroomInvitationsListSecurity struct {
    Option1 *ClassroomInvitationsListSecurityOption1 `security:"option"`
    Option2 *ClassroomInvitationsListSecurityOption2 `security:"option"`
    
}

type ClassroomInvitationsListRequest struct {
    QueryParams ClassroomInvitationsListQueryParams 
    Security ClassroomInvitationsListSecurity 
    
}

type ClassroomInvitationsListResponse struct {
    ContentType string 
    ListInvitationsResponse *shared.ListInvitationsResponse 
    StatusCode int64 
    
}

