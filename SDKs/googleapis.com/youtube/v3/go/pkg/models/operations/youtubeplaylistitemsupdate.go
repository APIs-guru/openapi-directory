package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubePlaylistItemsUpdateQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	Part                   []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubePlaylistItemsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubePlaylistItemsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubePlaylistItemsUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubePlaylistItemsUpdateSecurity struct {
	Option1 *YoutubePlaylistItemsUpdateSecurityOption1 `security:"option"`
	Option2 *YoutubePlaylistItemsUpdateSecurityOption2 `security:"option"`
	Option3 *YoutubePlaylistItemsUpdateSecurityOption3 `security:"option"`
}

type YoutubePlaylistItemsUpdateRequest struct {
	QueryParams YoutubePlaylistItemsUpdateQueryParams
	Request     *shared.PlaylistItem `request:"mediaType=application/json"`
	Security    YoutubePlaylistItemsUpdateSecurity
}

type YoutubePlaylistItemsUpdateResponse struct {
	ContentType  string
	PlaylistItem *shared.PlaylistItem
	StatusCode   int64
}
