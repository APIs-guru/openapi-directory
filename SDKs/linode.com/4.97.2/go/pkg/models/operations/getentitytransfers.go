package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntityTransfersQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetEntityTransfersSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetEntityTransfersSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetEntityTransfersSecurity struct {
	Option1 *GetEntityTransfersSecurityOption1 `security:"option"`
	Option2 *GetEntityTransfersSecurityOption2 `security:"option"`
}

type GetEntityTransfersRequest struct {
	QueryParams GetEntityTransfersQueryParams
	Security    GetEntityTransfersSecurity
}

type GetEntityTransfers200ApplicationJSON struct {
	Data    []shared.EntityTransfer `json:"data"`
	Page    *int64                  `json:"page"`
	Pages   *int64                  `json:"pages"`
	Results *int64                  `json:"results"`
}

type GetEntityTransfersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetEntityTransfersResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetEntityTransfers200ApplicationJSONObject     *GetEntityTransfers200ApplicationJSON
	GetEntityTransfersDefaultApplicationJSONObject *GetEntityTransfersDefaultApplicationJSON
}
