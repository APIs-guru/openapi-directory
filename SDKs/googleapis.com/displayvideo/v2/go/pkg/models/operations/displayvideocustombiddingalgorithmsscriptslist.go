package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams struct {
	CustomBiddingAlgorithmID string `pathParam:"style=simple,explode=false,name=customBiddingAlgorithmId"`
}

type DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	AdvertiserID   *string           `queryParam:"style=form,explode=true,name=advertiserId"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string           `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PartnerID      *string           `queryParam:"style=form,explode=true,name=partnerId"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoCustomBiddingAlgorithmsScriptsListRequest struct {
	PathParams  DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams
	QueryParams DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams
	Security    DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity
}

type DisplayvideoCustomBiddingAlgorithmsScriptsListResponse struct {
	ContentType                      string
	ListCustomBiddingScriptsResponse *shared.ListCustomBiddingScriptsResponse
	StatusCode                       int64
}
