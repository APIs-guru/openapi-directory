package operations

import (
	"openapi/pkg/models/shared"
)

type YoutubeLiveStreamsListQueryParams struct {
	DollarXgafv                   *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                   *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                           *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                      *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                        *string           `queryParam:"style=form,explode=true,name=fields"`
	ID                            []string          `queryParam:"style=form,explode=true,name=id"`
	Key                           *string           `queryParam:"style=form,explode=true,name=key"`
	MaxResults                    *int64            `queryParam:"style=form,explode=true,name=maxResults"`
	Mine                          *bool             `queryParam:"style=form,explode=true,name=mine"`
	OauthToken                    *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OnBehalfOfContentOwner        *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwner"`
	OnBehalfOfContentOwnerChannel *string           `queryParam:"style=form,explode=true,name=onBehalfOfContentOwnerChannel"`
	PageToken                     *string           `queryParam:"style=form,explode=true,name=pageToken"`
	Part                          []string          `queryParam:"style=form,explode=true,name=part"`
	PrettyPrint                   *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                     *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                    *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type YoutubeLiveStreamsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveStreamsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveStreamsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type YoutubeLiveStreamsListSecurity struct {
	Option1 *YoutubeLiveStreamsListSecurityOption1 `security:"option"`
	Option2 *YoutubeLiveStreamsListSecurityOption2 `security:"option"`
	Option3 *YoutubeLiveStreamsListSecurityOption3 `security:"option"`
}

type YoutubeLiveStreamsListRequest struct {
	QueryParams YoutubeLiveStreamsListQueryParams
	Security    YoutubeLiveStreamsListSecurity
}

type YoutubeLiveStreamsListResponse struct {
	ContentType            string
	LiveStreamListResponse *shared.LiveStreamListResponse
	StatusCode             int64
}
