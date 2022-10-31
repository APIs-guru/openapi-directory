package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeSuperChatEventsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Hl             *string           `queryParam:"style=form,explode=true,name=hl"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults     *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	Part           []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeSuperChatEventsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSuperChatEventsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSuperChatEventsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeSuperChatEventsListSecurity struct {
	Option1 *YoutubeSuperChatEventsListSecurityOption1 `security:"option"`
	Option2 *YoutubeSuperChatEventsListSecurityOption2 `security:"option"`
	Option3 *YoutubeSuperChatEventsListSecurityOption3 `security:"option"`
}

type YoutubeSuperChatEventsListRequest struct {
	QueryParams YoutubeSuperChatEventsListQueryParams
	Security    YoutubeSuperChatEventsListSecurity
}

type YoutubeSuperChatEventsListResponse struct {
	ContentType                string
	StatusCode                 int64
	SuperChatEventListResponse *shared.SuperChatEventListResponse
}
