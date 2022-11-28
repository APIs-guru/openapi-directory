package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersCreativesPatchPathParams struct {
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
	CreativeID   string `pathParam:"style=simple,explode=false,name=creativeId"`
}

type DisplayvideoAdvertisersCreativesPatchQueryParams struct {
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

type DisplayvideoAdvertisersCreativesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersCreativesPatchRequest struct {
	PathParams  DisplayvideoAdvertisersCreativesPatchPathParams
	QueryParams DisplayvideoAdvertisersCreativesPatchQueryParams
	Request     *shared.CreativeInput `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersCreativesPatchSecurity
}

type DisplayvideoAdvertisersCreativesPatchResponse struct {
	ContentType string
	Creative    *shared.Creative
	StatusCode  int64
}
