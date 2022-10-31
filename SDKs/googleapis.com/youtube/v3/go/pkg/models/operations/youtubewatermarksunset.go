package operations

import (
"openapi/pkg/models/shared")

type YoutubeWatermarksUnsetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ChannelID string `queryParam:"style=form,explode=true,name=channelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubeWatermarksUnsetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeWatermarksUnsetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeWatermarksUnsetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubeWatermarksUnsetSecurity struct {
    Option1 *YoutubeWatermarksUnsetSecurityOption1 `security:"option"`
    Option2 *YoutubeWatermarksUnsetSecurityOption2 `security:"option"`
    Option3 *YoutubeWatermarksUnsetSecurityOption3 `security:"option"`
    
}

type YoutubeWatermarksUnsetRequest struct {
    QueryParams YoutubeWatermarksUnsetQueryParams 
    Security YoutubeWatermarksUnsetSecurity 
    
}

type YoutubeWatermarksUnsetResponse struct {
    ContentType string 
    StatusCode int64 
    
}

