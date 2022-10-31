package operations

import (
	"openapi/pkg/models/shared"
)

type DisplayvideoAdvertisersInvoicesListPathParams struct {
	AdvertiserID string `pathParam:"style=simple,explode=false,name=advertiserId"`
}

type DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum string

const (
	DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnumLoiSapinInvoiceTypeUnspecified DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum = "LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED"
	DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnumLoiSapinInvoiceTypeMedia       DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum = "LOI_SAPIN_INVOICE_TYPE_MEDIA"
	DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnumLoiSapinInvoiceTypePlatform    DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum = "LOI_SAPIN_INVOICE_TYPE_PLATFORM"
)

type DisplayvideoAdvertisersInvoicesListQueryParams struct {
	DollarXgafv         *shared.XgafvEnum                                           `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string                                                     `queryParam:"style=form,explode=true,name=access_token"`
	Alt                 *shared.AltEnum                                             `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string                                                     `queryParam:"style=form,explode=true,name=callback"`
	Fields              *string                                                     `queryParam:"style=form,explode=true,name=fields"`
	IssueMonth          *string                                                     `queryParam:"style=form,explode=true,name=issueMonth"`
	Key                 *string                                                     `queryParam:"style=form,explode=true,name=key"`
	LoiSapinInvoiceType *DisplayvideoAdvertisersInvoicesListLoiSapinInvoiceTypeEnum `queryParam:"style=form,explode=true,name=loiSapinInvoiceType"`
	OauthToken          *string                                                     `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize            *int64                                                      `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken           *string                                                     `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint         *bool                                                       `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string                                                     `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType          *string                                                     `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string                                                     `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DisplayvideoAdvertisersInvoicesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersInvoicesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DisplayvideoAdvertisersInvoicesListSecurity struct {
	Option1 *DisplayvideoAdvertisersInvoicesListSecurityOption1 `security:"option"`
	Option2 *DisplayvideoAdvertisersInvoicesListSecurityOption2 `security:"option"`
}

type DisplayvideoAdvertisersInvoicesListRequest struct {
	PathParams  DisplayvideoAdvertisersInvoicesListPathParams
	QueryParams DisplayvideoAdvertisersInvoicesListQueryParams
	Security    DisplayvideoAdvertisersInvoicesListSecurity
}

type DisplayvideoAdvertisersInvoicesListResponse struct {
	ContentType          string
	ListInvoicesResponse *shared.ListInvoicesResponse
	StatusCode           int64
}
