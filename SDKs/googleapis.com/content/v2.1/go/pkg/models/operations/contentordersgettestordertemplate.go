package operations

import (
	"openapi/pkg/models/shared"
)

type ContentOrdersGettestordertemplateTemplateNameEnum string

const (
	ContentOrdersGettestordertemplateTemplateNameEnumTemplate1  ContentOrdersGettestordertemplateTemplateNameEnum = "TEMPLATE1"
	ContentOrdersGettestordertemplateTemplateNameEnumTemplate2  ContentOrdersGettestordertemplateTemplateNameEnum = "TEMPLATE2"
	ContentOrdersGettestordertemplateTemplateNameEnumTemplate1A ContentOrdersGettestordertemplateTemplateNameEnum = "TEMPLATE1A"
	ContentOrdersGettestordertemplateTemplateNameEnumTemplate1B ContentOrdersGettestordertemplateTemplateNameEnum = "TEMPLATE1B"
	ContentOrdersGettestordertemplateTemplateNameEnumTemplate3  ContentOrdersGettestordertemplateTemplateNameEnum = "TEMPLATE3"
	ContentOrdersGettestordertemplateTemplateNameEnumTemplate4  ContentOrdersGettestordertemplateTemplateNameEnum = "TEMPLATE4"
)

type ContentOrdersGettestordertemplatePathParams struct {
	MerchantID   string                                            `pathParam:"style=simple,explode=false,name=merchantId"`
	TemplateName ContentOrdersGettestordertemplateTemplateNameEnum `pathParam:"style=simple,explode=false,name=templateName"`
}

type ContentOrdersGettestordertemplateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Country        *string           `queryParam:"style=form,explode=true,name=country"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContentOrdersGettestordertemplateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentOrdersGettestordertemplateRequest struct {
	PathParams  ContentOrdersGettestordertemplatePathParams
	QueryParams ContentOrdersGettestordertemplateQueryParams
	Security    ContentOrdersGettestordertemplateSecurity
}

type ContentOrdersGettestordertemplateResponse struct {
	ContentType                        string
	OrdersGetTestOrderTemplateResponse *shared.OrdersGetTestOrderTemplateResponse
	StatusCode                         int64
}
