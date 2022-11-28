package operations

import (
	"openapi/pkg/models/shared"
)

type GetKernelsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetKernels200ApplicationJSON struct {
	Data    []shared.Kernel `json:"data,omitempty"`
	Page    *int64          `json:"page,omitempty"`
	Pages   *int64          `json:"pages,omitempty"`
	Results *int64          `json:"results,omitempty"`
}

type GetKernelsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetKernelsRequest struct {
	QueryParams GetKernelsQueryParams
}

type GetKernelsResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetKernels200ApplicationJSONObject     *GetKernels200ApplicationJSON
	GetKernelsDefaultApplicationJSONObject *GetKernelsDefaultApplicationJSON
}
