package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersCampaignsPatchPathParams struct {
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
	CampaignID   string `pathParam:"style=simple,explode=false,name=campaignId"`
}

type DisplayvideoAdvertisersCampaignsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
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

type DisplayvideoAdvertisersCampaignsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersCampaignsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersCampaignsPatchSecurity struct {
	Option1 *DisplayvideoAdvertisersCampaignsPatchSecurityOption1 `security:"option"`
	Option2 *DisplayvideoAdvertisersCampaignsPatchSecurityOption2 `security:"option"`
}

type DisplayvideoAdvertisersCampaignsPatchRequest struct {
	PathParams  DisplayvideoAdvertisersCampaignsPatchPathParams
	QueryParams DisplayvideoAdvertisersCampaignsPatchQueryParams
	Request     *shared.CampaignInput `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersCampaignsPatchSecurity
}

type DisplayvideoAdvertisersCampaignsPatchResponse struct {
	Campaign    *shared.Campaign
	ContentType string
	StatusCode  int64
}
