package operations

import (
	"openapi/pkg/models/shared"
)

type CloudchannelAccountsCustomersListPurchasableOffersPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type CloudchannelAccountsCustomersListPurchasableOffersQueryParams struct {
	DollarXgafv                    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                       *string           `queryParam:"style=form,explode=true,name=callback"`
	ChangeOfferPurchaseEntitlement *string           `queryParam:"style=form,explode=true,name=changeOfferPurchase.entitlement"`
	ChangeOfferPurchaseNewSku      *string           `queryParam:"style=form,explode=true,name=changeOfferPurchase.newSku"`
	CreateEntitlementPurchaseSku   *string           `queryParam:"style=form,explode=true,name=createEntitlementPurchase.sku"`
	Fields                         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                            *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode                   *string           `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken                     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize                       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken                      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint                    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                 *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type CloudchannelAccountsCustomersListPurchasableOffersSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type CloudchannelAccountsCustomersListPurchasableOffersRequest struct {
	PathParams  CloudchannelAccountsCustomersListPurchasableOffersPathParams
	QueryParams CloudchannelAccountsCustomersListPurchasableOffersQueryParams
	Security    CloudchannelAccountsCustomersListPurchasableOffersSecurity
}

type CloudchannelAccountsCustomersListPurchasableOffersResponse struct {
	ContentType                                       string
	GoogleCloudChannelV1ListPurchasableOffersResponse *shared.GoogleCloudChannelV1ListPurchasableOffersResponse
	StatusCode                                        int64
}
