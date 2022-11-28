package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams struct {
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
}

type DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams struct {
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

type DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest struct {
	PathParams  DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams
	QueryParams DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams
	Request     *shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput `request:"mediaType=application/json"`
	Security    DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity
}

type DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse struct {
	BulkEditAdvertiserAssignedTargetingOptionsResponse *shared.BulkEditAdvertiserAssignedTargetingOptionsResponse
	ContentType                                        string
	StatusCode                                         int64
}
