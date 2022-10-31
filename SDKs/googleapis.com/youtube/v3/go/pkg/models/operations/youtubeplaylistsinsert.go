package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubePlaylistsInsertQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                      *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                        *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                           *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                    *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner        *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	OnBehalfOfContentOwnerChannel *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
	Part                          []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                   *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                    *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubePlaylistsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubePlaylistsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubePlaylistsInsertSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubePlaylistsInsertSecurity struct {
	Option1 *YoutubePlaylistsInsertSecurityOption1 `security:"option"`
	Option2 *YoutubePlaylistsInsertSecurityOption2 `security:"option"`
	Option3 *YoutubePlaylistsInsertSecurityOption3 `security:"option"`
}

type YoutubePlaylistsInsertRequest struct {
	QueryParams YoutubePlaylistsInsertQueryParams
	Request     *shared.Playlist `request:"mediaType=application/json"`
	Security    YoutubePlaylistsInsertSecurity
}

type YoutubePlaylistsInsertResponse struct {
	ContentType string
	Playlist    *shared.Playlist
	StatusCode  int64
}
