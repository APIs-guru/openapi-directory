package operations

import (
"openapi/pkg/models/shared")

type GmailUsersMessagesGetPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}


type GmailUsersMessagesGetFormatEnum string

const (
    GmailUsersMessagesGetFormatEnumMinimal GmailUsersMessagesGetFormatEnum = "minimal"
GmailUsersMessagesGetFormatEnumFull GmailUsersMessagesGetFormatEnum = "full"
GmailUsersMessagesGetFormatEnumRaw GmailUsersMessagesGetFormatEnum = "raw"
GmailUsersMessagesGetFormatEnumMetadata GmailUsersMessagesGetFormatEnum = "metadata"
)


type GmailUsersMessagesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Format *GmailUsersMessagesGetFormatEnum `queryParam:"style=form,explode=true,name=format"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MetadataHeaders []string `queryParam:"style=form,explode=true,name=metadataHeaders"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type GmailUsersMessagesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesGetSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GmailUsersMessagesGetSecurity struct {
    Option1 *GmailUsersMessagesGetSecurityOption1 `security:"option"`
    Option2 *GmailUsersMessagesGetSecurityOption2 `security:"option"`
    Option3 *GmailUsersMessagesGetSecurityOption3 `security:"option"`
    Option4 *GmailUsersMessagesGetSecurityOption4 `security:"option"`
    Option5 *GmailUsersMessagesGetSecurityOption5 `security:"option"`
    Option6 *GmailUsersMessagesGetSecurityOption6 `security:"option"`
    Option7 *GmailUsersMessagesGetSecurityOption7 `security:"option"`
    
}

type GmailUsersMessagesGetRequest struct {
    PathParams GmailUsersMessagesGetPathParams 
    QueryParams GmailUsersMessagesGetQueryParams 
    Security GmailUsersMessagesGetSecurity 
    
}

type GmailUsersMessagesGetResponse struct {
    ContentType string 
    Message *shared.Message 
    StatusCode int64 
    
}

