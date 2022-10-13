package operations

import (
	"openapi/pkg/models/shared"
)

type GamesPlayersGetPathParams struct {
	PlayerID string `pathParam:"style=simple,explode=false,name=playerId"`
}

type GamesPlayersGetQueryParams struct {
	DollarXgafv              *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken              *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                      *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                 *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                   *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                      *string           `queryParam:"style=form,explode=true,name=key"`
	Language                 *string           `queryParam:"style=form,explode=true,name=language"`
	OauthToken               *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PlayerIDConsistencyToken *string           `queryParam:"style=form,explode=true,name=playerIdConsistencyToken"`
	PrettyPrint              *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType               *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol           *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type GamesPlayersGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type GamesPlayersGetRequest struct {
	PathParams  GamesPlayersGetPathParams
	QueryParams GamesPlayersGetQueryParams
	Security    GamesPlayersGetSecurity
}

type GamesPlayersGetResponse struct {
	ContentType string
	Player      *shared.Player
	StatusCode  int64
}
