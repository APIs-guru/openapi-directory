package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoCustomBiddingAlgorithmsPatchPathParams struct {
	CustomBiddingAlgorithmID string `pathParam:"style=simple,explode=false,name=customBiddingAlgorithmId"`
}

type DisplayvideoCustomBiddingAlgorithmsPatchQueryParams struct {
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

type DisplayvideoCustomBiddingAlgorithmsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoCustomBiddingAlgorithmsPatchRequest struct {
	PathParams  DisplayvideoCustomBiddingAlgorithmsPatchPathParams
	QueryParams DisplayvideoCustomBiddingAlgorithmsPatchQueryParams
	Request     *shared.CustomBiddingAlgorithm `request:"mediaType=application/json"`
	Security    DisplayvideoCustomBiddingAlgorithmsPatchSecurity
}

type DisplayvideoCustomBiddingAlgorithmsPatchResponse struct {
	ContentType            string
	CustomBiddingAlgorithm *shared.CustomBiddingAlgorithm
	StatusCode             int64
}
