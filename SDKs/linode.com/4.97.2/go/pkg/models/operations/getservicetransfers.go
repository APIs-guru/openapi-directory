package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceTransfersQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetServiceTransfersSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetServiceTransfersSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetServiceTransfersSecurity struct {
	Option1 *GetServiceTransfersSecurityOption1 `security:"option"`
	Option2 *GetServiceTransfersSecurityOption2 `security:"option"`
}

type GetServiceTransfersRequest struct {
	QueryParams GetServiceTransfersQueryParams
	Security    GetServiceTransfersSecurity
}

type GetServiceTransfers200ApplicationJSON struct {
	Data    []shared.ServiceTransfer `json:"data"`
	Page    *int64                   `json:"page"`
	Pages   *int64                   `json:"pages"`
	Results *int64                   `json:"results"`
}

type GetServiceTransfersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetServiceTransfersResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	GetServiceTransfers200ApplicationJSONObject     *GetServiceTransfers200ApplicationJSON
	GetServiceTransfersDefaultApplicationJSONObject *GetServiceTransfersDefaultApplicationJSON
}
