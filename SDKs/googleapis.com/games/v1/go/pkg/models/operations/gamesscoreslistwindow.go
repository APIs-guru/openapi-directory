package operations

import (
"openapi/pkg/models/shared")


type GamesScoresListWindowCollectionEnum string

const (
    GamesScoresListWindowCollectionEnumScoreCollectionUnspecified GamesScoresListWindowCollectionEnum = "SCORE_COLLECTION_UNSPECIFIED"
GamesScoresListWindowCollectionEnumPublic GamesScoresListWindowCollectionEnum = "PUBLIC"
GamesScoresListWindowCollectionEnumSocial GamesScoresListWindowCollectionEnum = "SOCIAL"
GamesScoresListWindowCollectionEnumFriends GamesScoresListWindowCollectionEnum = "FRIENDS"
)


type GamesScoresListWindowPathParams struct {
    Collection GamesScoresListWindowCollectionEnum `pathParam:"style=simple,explode=false,name=collection"`
    LeaderboardID string `pathParam:"style=simple,explode=false,name=leaderboardId"`
    
}


type GamesScoresListWindowTimeSpanEnum string

const (
    GamesScoresListWindowTimeSpanEnumScoreTimeSpanUnspecified GamesScoresListWindowTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
GamesScoresListWindowTimeSpanEnumAllTime GamesScoresListWindowTimeSpanEnum = "ALL_TIME"
GamesScoresListWindowTimeSpanEnumWeekly GamesScoresListWindowTimeSpanEnum = "WEEKLY"
GamesScoresListWindowTimeSpanEnumDaily GamesScoresListWindowTimeSpanEnum = "DAILY"
)


type GamesScoresListWindowQueryParams struct {
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
    ResultsAbove *int64 `queryParam:"style=form,explode=true,name=resultsAbove"`
    ReturnTopIfAbsent *bool `queryParam:"style=form,explode=true,name=returnTopIfAbsent"`
    TimeSpan GamesScoresListWindowTimeSpanEnum `queryParam:"style=form,explode=true,name=timeSpan"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type GamesScoresListWindowSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type GamesScoresListWindowRequest struct {
    PathParams GamesScoresListWindowPathParams 
    QueryParams GamesScoresListWindowQueryParams 
    Security GamesScoresListWindowSecurity 
    
}

type GamesScoresListWindowResponse struct {
    ContentType string 
    LeaderboardScores *shared.LeaderboardScores 
    StatusCode int64 
    
}

