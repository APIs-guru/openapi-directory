package operations

import (
"openapi/pkg/models/shared")


type GamesScoresListCollectionEnum string

const (
    GamesScoresListCollectionEnumScoreCollectionUnspecified GamesScoresListCollectionEnum = "SCORE_COLLECTION_UNSPECIFIED"
GamesScoresListCollectionEnumPublic GamesScoresListCollectionEnum = "PUBLIC"
GamesScoresListCollectionEnumSocial GamesScoresListCollectionEnum = "SOCIAL"
GamesScoresListCollectionEnumFriends GamesScoresListCollectionEnum = "FRIENDS"
)


type GamesScoresListPathParams struct {
    Collection GamesScoresListCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
    LeaderboardID string `pathParam:"style=simple,explode=false,name=leaderboardId"`
    
}


type GamesScoresListTimeSpanEnum string

const (
    GamesScoresListTimeSpanEnumScoreTimeSpanUnspecified GamesScoresListTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
GamesScoresListTimeSpanEnumAllTime GamesScoresListTimeSpanEnum = "ALL_TIME"
GamesScoresListTimeSpanEnumWeekly GamesScoresListTimeSpanEnum = "WEEKLY"
GamesScoresListTimeSpanEnumDaily GamesScoresListTimeSpanEnum = "DAILY"
)


type GamesScoresListQueryParams struct {
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
    TimeSpan GamesScoresListTimeSpanEnum `queryParam:"style=form,explode=true,name=timeSpan"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type GamesScoresListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GamesScoresListRequest struct {
    PathParams GamesScoresListPathParams 
    QueryParams GamesScoresListQueryParams 
    Security GamesScoresListSecurity 
    
}

type GamesScoresListResponse struct {
    ContentType string 
    LeaderboardScores *shared.LeaderboardScores 
    StatusCode int64 
    
}

