package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemListByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetItemListByIDRequest struct {
	PathParams GetItemListByIDPathParams
}

type GetItemListByIDResponse struct {
	ContentType string
	ItemList    *shared.ItemList
	StatusCode  int64
}
