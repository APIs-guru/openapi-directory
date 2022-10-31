package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInventoryItemsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInventoryItemsReadRequest struct {
	PathParams DcimInventoryItemsReadPathParams
}

type DcimInventoryItemsReadResponse struct {
	ContentType   string
	InventoryItem *shared.InventoryItem
	StatusCode    int64
}
