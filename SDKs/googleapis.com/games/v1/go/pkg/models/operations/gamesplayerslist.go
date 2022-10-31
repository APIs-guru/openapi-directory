package operations

import (
"openapi/pkg/models/shared")


type GamesPlayersListCollectionEnum string

const (
    GamesPlayersListCollectionEnumConnected GamesPlayersListCollectionEnum = "CONNECTED"
GamesPlayersListCollectionEnumVisible GamesPlayersListCollectionEnum = "VISIBLE"
GamesPlayersListCollectionEnumFriendsAll GamesPlayersListCollectionEnum = "FRIENDS_ALL"
)


type GamesPlayersListPathParams struct {
    Collection GamesPlayersListCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
    
}

type GamesPlayersListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Language *string `queryParam:"style=form,explode=true,name=language"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type GamesPlayersListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GamesPlayersListRequest struct {
    PathParams GamesPlayersListPathParams 
    QueryParams GamesPlayersListQueryParams 
    Security GamesPlayersListSecurity 
    
}

type GamesPlayersListResponse struct {
    ContentType string 
    PlayerListResponse *shared.PlayerListResponse 
    StatusCode int64 
    
}

