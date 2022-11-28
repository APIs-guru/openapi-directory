package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoInventorySourcesPatchPathParams struct {
	InventorySourceID string `pathParam:"style=simple,explode=false,name=inventorySourceId"`
}

type DisplayvideoInventorySourcesPatchQueryParams struct {
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

type DisplayvideoInventorySourcesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoInventorySourcesPatchRequest struct {
	PathParams  DisplayvideoInventorySourcesPatchPathParams
	QueryParams DisplayvideoInventorySourcesPatchQueryParams
	Request     *shared.InventorySourceInput `request:"mediaType=application/json"`
	Security    DisplayvideoInventorySourcesPatchSecurity
}

type DisplayvideoInventorySourcesPatchResponse struct {
	ContentType     string
	InventorySource *shared.InventorySource
	StatusCode      int64
}
