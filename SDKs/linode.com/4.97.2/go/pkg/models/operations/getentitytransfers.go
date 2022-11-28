package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntityTransfersQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetEntityTransfersSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetEntityTransfers200ApplicationJSON struct {
	Data    []shared.EntityTransfer `json:"data,omitempty"`
	Page    *int64                  `json:"page,omitempty"`
	Pages   *int64                  `json:"pages,omitempty"`
	Results *int64                  `json:"results,omitempty"`
}

type GetEntityTransfersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetEntityTransfersRequest struct {
	QueryParams GetEntityTransfersQueryParams
	Security    GetEntityTransfersSecurity
}

type GetEntityTransfersResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetEntityTransfers200ApplicationJSONObject     *GetEntityTransfers200ApplicationJSON
	GetEntityTransfersDefaultApplicationJSONObject *GetEntityTransfersDefaultApplicationJSON
}
