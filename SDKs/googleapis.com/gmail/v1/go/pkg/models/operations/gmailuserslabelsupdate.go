package operations

import (
"openapi/pkg/models/shared")

type GmailUsersLabelsUpdatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersLabelsUpdateQueryParams struct {
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

type GmailUsersLabelsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersLabelsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersLabelsUpdateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersLabelsUpdateSecurity struct {
    Option1 *GmailUsersLabelsUpdateSecurityOption1 `security:"option"`
    Option2 *GmailUsersLabelsUpdateSecurityOption2 `security:"option"`
    Option3 *GmailUsersLabelsUpdateSecurityOption3 `security:"option"`
    
}

type GmailUsersLabelsUpdateRequest struct {
    PathParams GmailUsersLabelsUpdatePathParams 
    QueryParams GmailUsersLabelsUpdateQueryParams 
    Request *shared.Label `request:"mediaType=application/json"`
    Security GmailUsersLabelsUpdateSecurity 
    
}

type GmailUsersLabelsUpdateResponse struct {
    ContentType string 
    Label *shared.Label 
    StatusCode int64 
    
}

