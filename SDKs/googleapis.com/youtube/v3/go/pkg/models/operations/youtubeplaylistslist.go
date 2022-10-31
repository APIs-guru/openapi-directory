package operations

import (
"openapi/pkg/models/shared")

type YoutubePlaylistsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ChannelID *string `queryParam:"style=form,explode=true,name=channelId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Hl *string `queryParam:"style=form,explode=true,name=hl"`
    ID []string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    Mine *bool `queryParam:"style=form,explode=true,name=mine"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    OnBehalfOfContentOwnerChannel *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type YoutubePlaylistsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistsListSecurity struct {
    Option1 *YoutubePlaylistsListSecurityOption1 `security:"option"`
    Option2 *YoutubePlaylistsListSecurityOption2 `security:"option"`
    Option3 *YoutubePlaylistsListSecurityOption3 `security:"option"`
    Option4 *YoutubePlaylistsListSecurityOption4 `security:"option"`
    
}

type YoutubePlaylistsListRequest struct {
    QueryParams YoutubePlaylistsListQueryParams 
    Security YoutubePlaylistsListSecurity 
    
}

type YoutubePlaylistsListResponse struct {
    ContentType string 
    PlaylistListResponse *shared.PlaylistListResponse 
    StatusCode int64 
    
}

