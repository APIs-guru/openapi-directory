package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams struct {
	AdvertiserID          string `pathParam:"style=simple,explode=false,name=advertiserId"`
	NegativeKeywordListID string `pathParam:"style=simple,explode=false,name=negativeKeywordListId"`
}

type DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams struct {
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

type DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersNegativeKeywordListsPatchRequest struct {
	PathParams  DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams
	QueryParams DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams
	Request     *shared.NegativeKeywordList `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity
}

type DisplayvideoAdvertisersNegativeKeywordListsPatchResponse struct {
	ContentType         string
	NegativeKeywordList *shared.NegativeKeywordList
	StatusCode          int64
}
