package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersCampaignsCreatePathParams struct {
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
}

type DisplayvideoAdvertisersCampaignsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoAdvertisersCampaignsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersCampaignsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersCampaignsCreateSecurity struct {
	Option1 *DisplayvideoAdvertisersCampaignsCreateSecurityOption1 `security:"option"`
	Option2 *DisplayvideoAdvertisersCampaignsCreateSecurityOption2 `security:"option"`
}

type DisplayvideoAdvertisersCampaignsCreateRequest struct {
	PathParams  DisplayvideoAdvertisersCampaignsCreatePathParams
	QueryParams DisplayvideoAdvertisersCampaignsCreateQueryParams
	Request     *shared.CampaignInput `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersCampaignsCreateSecurity
}

type DisplayvideoAdvertisersCampaignsCreateResponse struct {
	Campaign    *shared.Campaign
	ContentType string
	StatusCode  int64
}
