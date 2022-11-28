package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePersonalAccessTokenPathParams struct {
	TokenID int64 `pathParam:"style=simple,explode=false,name=tokenId"`
}

type DeletePersonalAccessTokenSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeletePersonalAccessTokenDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeletePersonalAccessTokenRequest struct {
	PathParams DeletePersonalAccessTokenPathParams
	Security   DeletePersonalAccessTokenSecurity
}

type DeletePersonalAccessTokenResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	DeletePersonalAccessToken200ApplicationJSONObject     map[string]interface{}
	DeletePersonalAccessTokenDefaultApplicationJSONObject *DeletePersonalAccessTokenDefaultApplicationJSON
}
