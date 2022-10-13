package operations

import (
	"openapi/pkg/models/shared"
)

type ContentPosInventoryPathParams struct {
	MerchantID       string `pathParam:"style=simple,explode=false,name=merchantId"`
	TargetMerchantID string `pathParam:"style=simple,explode=false,name=targetMerchantId"`
}

type ContentPosInventoryQueryParams struct {
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

type ContentPosInventorySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentPosInventoryRequest struct {
	PathParams  ContentPosInventoryPathParams
	QueryParams ContentPosInventoryQueryParams
	Request     *shared.PosInventoryRequest `request:"mediaType=application/json"`
	Security    ContentPosInventorySecurity
}

type ContentPosInventoryResponse struct {
	ContentType          string
	PosInventoryResponse *shared.PosInventoryResponse
	StatusCode           int64
}
