package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceTransfersQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetServiceTransfersSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetServiceTransfers200ApplicationJSON struct {
	Data    []shared.ServiceTransfer `json:"data,omitempty"`
	Page    *int64                   `json:"page,omitempty"`
	Pages   *int64                   `json:"pages,omitempty"`
	Results *int64                   `json:"results,omitempty"`
}

type GetServiceTransfersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetServiceTransfersRequest struct {
	QueryParams GetServiceTransfersQueryParams
	Security    GetServiceTransfersSecurity
}

type GetServiceTransfersResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetServiceTransfers200ApplicationJSONObject     *GetServiceTransfers200ApplicationJSON
	GetServiceTransfersDefaultApplicationJSONObject *GetServiceTransfersDefaultApplicationJSON
}
