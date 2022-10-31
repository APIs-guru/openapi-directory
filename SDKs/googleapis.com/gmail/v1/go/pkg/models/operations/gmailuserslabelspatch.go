package operations

import (
"openapi/pkg/models/shared")

type GmailUsersLabelsPatchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GmailUsersLabelsPatchQueryParams struct {
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

type GmailUsersLabelsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersLabelsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersLabelsPatchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersLabelsPatchSecurity struct {
    Option1 *GmailUsersLabelsPatchSecurityOption1 `security:"option"`
    Option2 *GmailUsersLabelsPatchSecurityOption2 `security:"option"`
    Option3 *GmailUsersLabelsPatchSecurityOption3 `security:"option"`
    
}

type GmailUsersLabelsPatchRequest struct {
    PathParams GmailUsersLabelsPatchPathParams 
    QueryParams GmailUsersLabelsPatchQueryParams 
    Request *shared.Label `request:"mediaType=application/json"`
    Security GmailUsersLabelsPatchSecurity 
    
}

type GmailUsersLabelsPatchResponse struct {
    ContentType string 
    Label *shared.Label 
    StatusCode int64 
    
}

