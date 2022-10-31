package operations

import (
"openapi/pkg/models/shared")

type YoutubePlaylistItemsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ID []string `queryParam:"style=form,explode=true,name=id"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OnBehalfOfContentOwner *string `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    Part []string `queryParam:"style=form,explode=true,name=part"`
    PlaylistID *string `queryParam:"style=form,explode=true,name=playlistId"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    VideoID *string `queryParam:"style=form,explode=true,name=videoId"`
    
}

type YoutubePlaylistItemsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistItemsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistItemsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistItemsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type YoutubePlaylistItemsListSecurity struct {
    Option1 *YoutubePlaylistItemsListSecurityOption1 `security:"option"`
    Option2 *YoutubePlaylistItemsListSecurityOption2 `security:"option"`
    Option3 *YoutubePlaylistItemsListSecurityOption3 `security:"option"`
    Option4 *YoutubePlaylistItemsListSecurityOption4 `security:"option"`
    
}

type YoutubePlaylistItemsListRequest struct {
    QueryParams YoutubePlaylistItemsListQueryParams 
    Security YoutubePlaylistItemsListSecurity 
    
}

type YoutubePlaylistItemsListResponse struct {
    ContentType string 
    PlaylistItemListResponse *shared.PlaylistItemListResponse 
    StatusCode int64 
    
}

