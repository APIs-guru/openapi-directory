package operations

import (
"openapi/pkg/models/shared")

type FirebasehostingSitesChannelsCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type FirebasehostingSitesChannelsCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ChannelID *string `queryParam:"style=form,explode=true,name=channelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type FirebasehostingSitesChannelsCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesChannelsCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type FirebasehostingSitesChannelsCreateSecurity struct {
    Option1 *FirebasehostingSitesChannelsCreateSecurityOption1 `security:"option"`
    Option2 *FirebasehostingSitesChannelsCreateSecurityOption2 `security:"option"`
    
}

type FirebasehostingSitesChannelsCreateRequest struct {
    PathParams FirebasehostingSitesChannelsCreatePathParams 
    QueryParams FirebasehostingSitesChannelsCreateQueryParams 
    Request *shared.Channel `request:"mediaType=application/json"`
    Security FirebasehostingSitesChannelsCreateSecurity 
    
}

type FirebasehostingSitesChannelsCreateResponse struct {
    Channel *shared.Channel 
    ContentType string 
    StatusCode int64 
    
}

