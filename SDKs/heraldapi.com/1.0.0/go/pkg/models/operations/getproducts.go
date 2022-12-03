package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsQueryParams struct {
	ProducerID *string `queryParam:"style=form,explode=true,name=producer_id"`
}

type GetProducts200ApplicationJSON struct {
	Products []shared.ProductV1 `json:"products,omitempty"`
}

type GetProducts400ApplicationJSON struct {
	Errors []shared.ErrorV1 `json:"errors,omitempty"`
}

type GetProductsRequest struct {
	QueryParams GetProductsQueryParams
}

type GetProductsResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetProducts200ApplicationJSONObject *GetProducts200ApplicationJSON
	GetProducts400ApplicationJSONObject *GetProducts400ApplicationJSON
}
