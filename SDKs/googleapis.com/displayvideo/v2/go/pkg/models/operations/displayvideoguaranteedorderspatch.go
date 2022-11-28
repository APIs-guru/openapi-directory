package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoGuaranteedOrdersPatchPathParams struct {
	GuaranteedOrderID string `pathParam:"style=simple,explode=false,name=guaranteedOrderId"`
}

type DisplayvideoGuaranteedOrdersPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AdvertiserID   *string           `queryParam:"style=form,explode=true,name=advertiserId"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PartnerID      *string           `queryParam:"style=form,explode=true,name=partnerId"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoGuaranteedOrdersPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoGuaranteedOrdersPatchRequest struct {
	PathParams  DisplayvideoGuaranteedOrdersPatchPathParams
	QueryParams DisplayvideoGuaranteedOrdersPatchQueryParams
	Request     *shared.GuaranteedOrderInput `request:"mediaType=application/json"`
	Security    DisplayvideoGuaranteedOrdersPatchSecurity
}

type DisplayvideoGuaranteedOrdersPatchResponse struct {
	ContentType     string
	GuaranteedOrder *shared.GuaranteedOrder
	StatusCode      int64
}
