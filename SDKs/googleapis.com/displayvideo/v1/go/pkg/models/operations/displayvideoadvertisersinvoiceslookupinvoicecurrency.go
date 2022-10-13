package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams struct {
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
}

type DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	InvoiceMonth   *string           `queryParam:"style=form,explode=true,name=invoiceMonth"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity struct {
	Option1 *DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption1 `security:"option"`
	Option2 *DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurityOption2 `security:"option"`
}

type DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest struct {
	PathParams  DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyPathParams
	QueryParams DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyQueryParams
	Security    DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencySecurity
}

type DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse struct {
	ContentType                   string
	LookupInvoiceCurrencyResponse *shared.LookupInvoiceCurrencyResponse
	StatusCode                    int64
}
