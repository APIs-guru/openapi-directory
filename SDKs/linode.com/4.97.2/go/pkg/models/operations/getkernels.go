package operations

import (
	"openapi/pkg/models/shared"
)

type GetKernelsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetKernelsRequest struct {
	QueryParams GetKernelsQueryParams
}

type GetKernels200ApplicationJSON struct {
	Data    []shared.Kernel `json:"data"`
	Page    *int64          `json:"page"`
	Pages   *int64          `json:"pages"`
	Results *int64          `json:"results"`
}

type GetKernelsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetKernelsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetKernels200ApplicationJSONObject     *GetKernels200ApplicationJSON
	GetKernelsDefaultApplicationJSONObject *GetKernelsDefaultApplicationJSON
}
