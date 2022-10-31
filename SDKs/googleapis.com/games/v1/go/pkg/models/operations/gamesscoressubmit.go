package operations

import (
	"openapi/pkg/models/shared"
)

type GamesScoresSubmitPathParams struct {
	LeaderboardID string `pathParam:"style=simple,explode=false,name=leaderboardId"`
}

type GamesScoresSubmitQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	Language       *string           `queryParam:"style=form,explode=true,name=language"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Score          string            `queryParam:"style=form,explode=true,name=score"`
	ScoreTag       *string           `queryParam:"style=form,explode=true,name=scoreTag"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesScoresSubmitSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesScoresSubmitRequest struct {
	PathParams  GamesScoresSubmitPathParams
	QueryParams GamesScoresSubmitQueryParams
	Security    GamesScoresSubmitSecurity
}

type GamesScoresSubmitResponse struct {
	ContentType         string
	PlayerScoreResponse *shared.PlayerScoreResponse
	StatusCode          int64
}
