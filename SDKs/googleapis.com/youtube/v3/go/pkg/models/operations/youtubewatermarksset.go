package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeWatermarksSetQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	ChannelID              string            `queryParam:"style=form,explode=true,name=channelId"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeWatermarksSetRequests struct {
	ApplicationOctetStream []byte `request:"mediaType=application/octet-stream"`
	ImageJpeg              []byte `request:"mediaType=image/jpeg"`
	ImagePng               []byte `request:"mediaType=image/png"`
}

type YoutubeWatermarksSetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeWatermarksSetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeWatermarksSetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeWatermarksSetSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeWatermarksSetSecurity struct {
	Option1 *YoutubeWatermarksSetSecurityOption1 `security:"option"`
	Option2 *YoutubeWatermarksSetSecurityOption2 `security:"option"`
	Option3 *YoutubeWatermarksSetSecurityOption3 `security:"option"`
	Option4 *YoutubeWatermarksSetSecurityOption4 `security:"option"`
}

type YoutubeWatermarksSetRequest struct {
	QueryParams YoutubeWatermarksSetQueryParams
	Request     *YoutubeWatermarksSetRequests
	Security    YoutubeWatermarksSetSecurity
}

type YoutubeWatermarksSetResponse struct {
	ContentType string
	StatusCode  int64
}
