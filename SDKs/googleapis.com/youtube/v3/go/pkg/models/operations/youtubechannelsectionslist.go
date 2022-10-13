package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeChannelSectionsListQueryParams struct {
	DollarXgafv            *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken            *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                    *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback               *string           `queryParam:"style=form,explode=true,name=callback"`
	ChannelID              *string           `queryParam:"style=form,explode=true,name=channelId"`
	Fields                 *string           `queryParam:"style=form,explode=true,name=fields"`
	Hl                     *string           `queryParam:"style=form,explode=true,name=hl"`
	ID                     []string          `queryParam:"style=form,explode=true,name=id"`
	Key                    *string           `queryParam:"style=form,explode=true,name=key"`
	Mine                   *bool             `queryParam:"style=form,explode=true,name=mine"`
	OauthToken             *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	Part                   []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint            *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser              *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType             *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol         *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeChannelSectionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelSectionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelSectionsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelSectionsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeChannelSectionsListSecurity struct {
	Option1 *YoutubeChannelSectionsListSecurityOption1 `security:"option"`
	Option2 *YoutubeChannelSectionsListSecurityOption2 `security:"option"`
	Option3 *YoutubeChannelSectionsListSecurityOption3 `security:"option"`
	Option4 *YoutubeChannelSectionsListSecurityOption4 `security:"option"`
}

type YoutubeChannelSectionsListRequest struct {
	QueryParams YoutubeChannelSectionsListQueryParams
	Security    YoutubeChannelSectionsListSecurity
}

type YoutubeChannelSectionsListResponse struct {
	ChannelSectionListResponse *shared.ChannelSectionListResponse
	ContentType                string
	StatusCode                 int64
}
