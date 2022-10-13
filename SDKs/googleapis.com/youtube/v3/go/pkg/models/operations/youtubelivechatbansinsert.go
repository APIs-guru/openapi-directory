package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeLiveChatBansInsertQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	Part           []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeLiveChatBansInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveChatBansInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveChatBansInsertSecurity struct {
	Option1 *YoutubeLiveChatBansInsertSecurityOption1 `security:"option"`
	Option2 *YoutubeLiveChatBansInsertSecurityOption2 `security:"option"`
}

type YoutubeLiveChatBansInsertRequest struct {
	QueryParams YoutubeLiveChatBansInsertQueryParams
	Request     *shared.LiveChatBan `request:"mediaType=application/json"`
	Security    YoutubeLiveChatBansInsertSecurity
}

type YoutubeLiveChatBansInsertResponse struct {
	ContentType string
	LiveChatBan *shared.LiveChatBan
	StatusCode  int64
}
