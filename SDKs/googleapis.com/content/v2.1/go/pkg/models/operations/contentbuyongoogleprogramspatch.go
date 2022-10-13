package operations

import (
	"openapi/pkg/models/shared"
)

type ContentBuyongoogleprogramsPatchPathParams struct {
	MerchantID string `pathParam:"style=simple,explode=false,name=merchantId"`
	RegionCode string `pathParam:"style=simple,explode=false,name=regionCode"`
}

type ContentBuyongoogleprogramsPatchQueryParams struct {
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

type ContentBuyongoogleprogramsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentBuyongoogleprogramsPatchRequest struct {
	PathParams  ContentBuyongoogleprogramsPatchPathParams
	QueryParams ContentBuyongoogleprogramsPatchQueryParams
	Request     *shared.BuyOnGoogleProgramStatus `request:"mediaType=application/json"`
	Security    ContentBuyongoogleprogramsPatchSecurity
}

type ContentBuyongoogleprogramsPatchResponse struct {
	BuyOnGoogleProgramStatus *shared.BuyOnGoogleProgramStatus
	ContentType              string
	StatusCode               int64
}
