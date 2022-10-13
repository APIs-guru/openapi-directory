package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeLiveChatModeratorsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LiveChatID     string            `queryParam:"style=form,explode=true,name=liveChatId"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	Part           []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeLiveChatModeratorsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveChatModeratorsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveChatModeratorsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveChatModeratorsListSecurity struct {
	Option1 *YoutubeLiveChatModeratorsListSecurityOption1 `security:"option"`
	Option2 *YoutubeLiveChatModeratorsListSecurityOption2 `security:"option"`
	Option3 *YoutubeLiveChatModeratorsListSecurityOption3 `security:"option"`
}

type YoutubeLiveChatModeratorsListRequest struct {
	QueryParams YoutubeLiveChatModeratorsListQueryParams
	Security    YoutubeLiveChatModeratorsListSecurity
}

type YoutubeLiveChatModeratorsListResponse struct {
	ContentType                   string
	LiveChatModeratorListResponse *shared.LiveChatModeratorListResponse
	StatusCode                    int64
}
