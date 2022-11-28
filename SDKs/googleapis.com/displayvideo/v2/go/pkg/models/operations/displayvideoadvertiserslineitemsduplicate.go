package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersLineItemsDuplicatePathParams struct {
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
	LineItemID   string `pathParam:"style=simple,explode=false,name=lineItemId"`
}

type DisplayvideoAdvertisersLineItemsDuplicateQueryParams struct {
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

type DisplayvideoAdvertisersLineItemsDuplicateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersLineItemsDuplicateRequest struct {
	PathParams  DisplayvideoAdvertisersLineItemsDuplicatePathParams
	QueryParams DisplayvideoAdvertisersLineItemsDuplicateQueryParams
	Request     *shared.DuplicateLineItemRequest `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersLineItemsDuplicateSecurity
}

type DisplayvideoAdvertisersLineItemsDuplicateResponse struct {
	ContentType               string
	DuplicateLineItemResponse *shared.DuplicateLineItemResponse
	StatusCode                int64
}
