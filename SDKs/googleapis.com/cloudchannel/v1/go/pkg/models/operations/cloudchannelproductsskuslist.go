package operations

import (
	"openapi/pkg/models/shared"
)

type CloudchannelProductsSkusListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type CloudchannelProductsSkusListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Account        *string           `queryParam:"style=form,explode=true,name=account"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string           `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudchannelProductsSkusListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudchannelProductsSkusListRequest struct {
	PathParams  CloudchannelProductsSkusListPathParams
	QueryParams CloudchannelProductsSkusListQueryParams
	Security    CloudchannelProductsSkusListSecurity
}

type CloudchannelProductsSkusListResponse struct {
	ContentType                          string
	GoogleCloudChannelV1ListSkusResponse *shared.GoogleCloudChannelV1ListSkusResponse
	StatusCode                           int64
}
