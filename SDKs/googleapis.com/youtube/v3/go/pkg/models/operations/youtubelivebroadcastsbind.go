package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeLiveBroadcastsBindQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                      *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                        *string           `queryParam:"style=form,explode=true,name=fields"`
	ID                            string            `queryParam:"style=form,explode=true,name=id"`
	Key                           *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                    *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner        *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	OnBehalfOfContentOwnerChannel *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
	Part                          []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                   *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StreamID                      *string           `queryParam:"style=form,explode=true,name=streamId"`
	UploadType                    *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeLiveBroadcastsBindSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsBindSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveBroadcastsBindSecurity struct {
	Option1 *YoutubeLiveBroadcastsBindSecurityOption1 `security:"option"`
	Option2 *YoutubeLiveBroadcastsBindSecurityOption2 `security:"option"`
}

type YoutubeLiveBroadcastsBindRequest struct {
	QueryParams YoutubeLiveBroadcastsBindQueryParams
	Security    YoutubeLiveBroadcastsBindSecurity
}

type YoutubeLiveBroadcastsBindResponse struct {
	ContentType   string
	LiveBroadcast *shared.LiveBroadcast
	StatusCode    int64
}
