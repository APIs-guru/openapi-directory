package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams struct {
	AdvertiserID          string `pathParam:"style=simple,explode=false,name=advertiserId"`
	NegativeKeywordListID string `pathParam:"style=simple,explode=false,name=negativeKeywordListId"`
}

type DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditQueryParams struct {
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

type DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest struct {
	PathParams  DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams
	QueryParams DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditQueryParams
	Request     *shared.BulkEditNegativeKeywordsRequest `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity
}

type DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse struct {
	BulkEditNegativeKeywordsResponse *shared.BulkEditNegativeKeywordsResponse
	ContentType                      string
	StatusCode                       int64
}
