package operations

import (
	"openapi/pkg/models/shared"
)

var GetPaymentMethodsServerList = []string{
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
}

type GetPaymentMethodsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetPaymentMethodsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetPaymentMethods200ApplicationJSON struct {
	Data    []shared.PaymentMethod `json:"data,omitempty"`
	Page    *int64                 `json:"page,omitempty"`
	Pages   *int64                 `json:"pages,omitempty"`
	Results *int64                 `json:"results,omitempty"`
}

type GetPaymentMethodsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetPaymentMethodsRequest struct {
	ServerURL   *string
	QueryParams GetPaymentMethodsQueryParams
	Security    GetPaymentMethodsSecurity
}

type GetPaymentMethodsResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetPaymentMethods200ApplicationJSONObject     *GetPaymentMethods200ApplicationJSON
	GetPaymentMethodsDefaultApplicationJSONObject *GetPaymentMethodsDefaultApplicationJSON
}
