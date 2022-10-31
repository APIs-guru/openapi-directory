package operations

import (
"openapi/pkg/models/shared")

type DfareportingUserProfilesGetPathParams struct {
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    
}

type DfareportingUserProfilesGetQueryParams struct {
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

type DfareportingUserProfilesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingUserProfilesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingUserProfilesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DfareportingUserProfilesGetSecurity struct {
    Option1 *DfareportingUserProfilesGetSecurityOption1 `security:"option"`
    Option2 *DfareportingUserProfilesGetSecurityOption2 `security:"option"`
    Option3 *DfareportingUserProfilesGetSecurityOption3 `security:"option"`
    
}

type DfareportingUserProfilesGetRequest struct {
    PathParams DfareportingUserProfilesGetPathParams 
    QueryParams DfareportingUserProfilesGetQueryParams 
    Security DfareportingUserProfilesGetSecurity 
    
}

type DfareportingUserProfilesGetResponse struct {
    ContentType string 
    StatusCode int64 
    UserProfile *shared.UserProfile 
    
}

