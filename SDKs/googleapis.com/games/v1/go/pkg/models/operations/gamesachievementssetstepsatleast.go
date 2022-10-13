package operations

import (
	"openapi/pkg/models/shared"
)

type GamesAchievementsSetStepsAtLeastPathParams struct {
	AchievementID string `pathParam:"style=simple,explode=false,name=achievementId"`
}

type GamesAchievementsSetStepsAtLeastQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Steps          int64             `queryParam:"style=form,explode=true,name=steps"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesAchievementsSetStepsAtLeastSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesAchievementsSetStepsAtLeastRequest struct {
	PathParams  GamesAchievementsSetStepsAtLeastPathParams
	QueryParams GamesAchievementsSetStepsAtLeastQueryParams
	Security    GamesAchievementsSetStepsAtLeastSecurity
}

type GamesAchievementsSetStepsAtLeastResponse struct {
	AchievementSetStepsAtLeastResponse *shared.AchievementSetStepsAtLeastResponse
	ContentType                        string
	StatusCode                         int64
}
