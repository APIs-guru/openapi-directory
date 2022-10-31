package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeChannelsListQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	CategoryID             *string           `queryParam:"style=form,explode=true,name=categoryId"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	ForUsername            *string           `queryParam:"style=form,explode=true,name=forUsername"`
	Hl                     *string           `queryParam:"style=form,explode=true,name=hl"`
	ID                     []string          `queryParam:"style=form,explode=true,name=id"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	ManagedByMe            *bool             `queryParam:"style=form,explode=true,name=managedByMe"`
	MaxResults             *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	Mine                   *bool             `queryParam:"style=form,explode=true,name=mine"`
	MySubscribers          *bool             `queryParam:"style=form,explode=true,name=mySubscribers"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	PageToken              *string           `queryParam:"style=form,explode=true,name=pageToken"`
	Part                   []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeChannelsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelsListSecurity struct {
	Option1 *YoutubeChannelsListSecurityOption1 `security:"option"`
	Option2 *YoutubeChannelsListSecurityOption2 `security:"option"`
	Option3 *YoutubeChannelsListSecurityOption3 `security:"option"`
	Option4 *YoutubeChannelsListSecurityOption4 `security:"option"`
	Option5 *YoutubeChannelsListSecurityOption5 `security:"option"`
}

type YoutubeChannelsListRequest struct {
	QueryParams YoutubeChannelsListQueryParams
	Security    YoutubeChannelsListSecurity
}

type YoutubeChannelsListResponse struct {
	ChannelListResponse *shared.ChannelListResponse
	ContentType         string
	StatusCode          int64
}
