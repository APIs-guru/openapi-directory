package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoPartnersChannelsPatchPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channelId"`
	PartnerID string `pathParam:"style=simple,explode=false,name=partnerId"`
}

type DisplayvideoPartnersChannelsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AdvertiserID   *string           `queryParam:"style=form,explode=true,name=advertiserId"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoPartnersChannelsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoPartnersChannelsPatchRequest struct {
	PathParams  DisplayvideoPartnersChannelsPatchPathParams
	QueryParams DisplayvideoPartnersChannelsPatchQueryParams
	Request     *shared.Channel `request:"mediaType=application/json"`
	Security    DisplayvideoPartnersChannelsPatchSecurity
}

type DisplayvideoPartnersChannelsPatchResponse struct {
	Channel     *shared.Channel
	ContentType string
	StatusCode  int64
}
