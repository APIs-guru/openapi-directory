package operations

import (
	"openapi/pkg/models/shared"
)

type GetTxsQueryParams struct {
	Address *string  `queryParam:"style=form,explode=true,name=address"`
	Block   *string  `queryParam:"style=form,explode=true,name=block"`
	PageNum *float64 `queryParam:"style=form,explode=true,name=pageNum"`
}

type GetTxsRequest struct {
	QueryParams GetTxsQueryParams
}

type GetTxsResponse struct {
	ContentType    string
	StatusCode     int64
	GetTxsResponse *shared.GetTxsResponse
}
