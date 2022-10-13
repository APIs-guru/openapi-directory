package operations

import (
	"openapi/pkg/models/shared"
)

type GamesScoresGetTimeSpanEnum string

const (
	GamesScoresGetTimeSpanEnumScoreTimeSpanUnspecified GamesScoresGetTimeSpanEnum = "SCORE_TIME_SPAN_UNSPECIFIED"
	GamesScoresGetTimeSpanEnumAll                      GamesScoresGetTimeSpanEnum = "ALL"
	GamesScoresGetTimeSpanEnumAllTime                  GamesScoresGetTimeSpanEnum = "ALL_TIME"
	GamesScoresGetTimeSpanEnumWeekly                   GamesScoresGetTimeSpanEnum = "WEEKLY"
	GamesScoresGetTimeSpanEnumDaily                    GamesScoresGetTimeSpanEnum = "DAILY"
)

type GamesScoresGetPathParams struct {
	LeaderboardID string                     `pathParam:"style=simple,explode=false,name=leaderboardId"`
	PlayerID      string                     `pathParam:"style=simple,explode=false,name=playerId"`
	TimeSpan      GamesScoresGetTimeSpanEnum `pathParam:"style=simple,explode=false,name=timeSpan"`
}

type GamesScoresGetIncludeRankTypeEnum string

const (
	GamesScoresGetIncludeRankTypeEnumIncludeRankTypeUnspecified GamesScoresGetIncludeRankTypeEnum = "INCLUDE_RANK_TYPE_UNSPECIFIED"
	GamesScoresGetIncludeRankTypeEnumAll                        GamesScoresGetIncludeRankTypeEnum = "ALL"
	GamesScoresGetIncludeRankTypeEnumPublic                     GamesScoresGetIncludeRankTypeEnum = "PUBLIC"
	GamesScoresGetIncludeRankTypeEnumSocial                     GamesScoresGetIncludeRankTypeEnum = "SOCIAL"
	GamesScoresGetIncludeRankTypeEnumFriends                    GamesScoresGetIncludeRankTypeEnum = "FRIENDS"
)

type GamesScoresGetQueryParams struct {
	DollarXgafv     *shared.XgafvEnum                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken     *string                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt             *shared.AltEnum                    `queryParam:"style=form,explode=true,name=alt"`
	Callback        *string                            `queryParam:"style=form,explode=true,name=callback"`
	Fields          *string                            `queryParam:"style=form,explode=true,name=fields"`
	IncludeRankType *GamesScoresGetIncludeRankTypeEnum `queryParam:"style=form,explode=true,name=includeRankType"`
	Key             *string                            `queryParam:"style=form,explode=true,name=key"`
	Language        *string                            `queryParam:"style=form,explode=true,name=language"`
	MaxResults      *int64                             `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken      *string                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken       *string                            `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint     *bool                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType      *string                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol  *string                            `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesScoresGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesScoresGetRequest struct {
	PathParams  GamesScoresGetPathParams
	QueryParams GamesScoresGetQueryParams
	Security    GamesScoresGetSecurity
}

type GamesScoresGetResponse struct {
	ContentType                        string
	PlayerLeaderboardScoreListResponse *shared.PlayerLeaderboardScoreListResponse
	StatusCode                         int64
}
